"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trophy, Code, Zap, Github, Linkedin, Twitter } from "lucide-react";
import { profileCardVariants } from "@/lib/motion";

interface Achievement {
  icon: "trophy" | "code" | "zap";
  text: string;
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

interface ProfileCardProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  achievements: Achievement[];
  social: SocialLinks;
  accentColor: "primary" | "secondary" | "accent";
  index: number;
}

const iconMap = {
  trophy: Trophy,
  code: Code,
  zap: Zap,
};

const accentClasses = {
  primary: "border-primary",
  secondary: "border-secondary",
  accent: "border-accent",
};

const bgAccentClasses = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

export default function ProfileCard({
  id,
  name,
  role,
  bio,
  avatar,
  achievements,
  social,
  accentColor,
  index,
}: ProfileCardProps) {
  return (
    <motion.div
      variants={profileCardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      whileHover="hover"
      className="h-full"
    >
      <Card className="p-6 h-full flex flex-col bg-card hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-opacity-50">
        {/* Avatar and Basic Info */}
        <div className="flex items-start space-x-4 mb-4">
          <Avatar
            className={`w-16 h-16 border-3 ${accentClasses[accentColor]}`}
          >
            <AvatarFallback
              className={`${bgAccentClasses[accentColor]} text-primary-foreground font-bold text-lg`}
            >
              {avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground font-mono">{role}</p>
            <motion.div
              className="h-1 w-12 rounded-full mt-2"
              style={{ backgroundColor: `var(--${accentColor})` }}
              initial={{ width: 0 }}
              whileHover={{ width: "3rem" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground mb-4 flex-1">{bio}</p>

        {/* Achievements */}
        <div className="space-y-2 mb-4">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon];
            return (
              <motion.div
                key={i}
                className="flex items-center space-x-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Icon
                  className={`h-4 w-4`}
                  style={{ color: `var(--${accentColor})` }}
                />
                <span className="text-muted-foreground">
                  {achievement.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-2 pt-4 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {social.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {social.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
          {social.twitter && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
        </motion.div>
      </Card>
    </motion.div>
  );
}
