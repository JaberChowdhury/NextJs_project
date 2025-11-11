"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { projects } from "@/content/projects/entry";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function Temp() {
  return (
    <div className="w-full relative grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project, idx) => {
        return (
          <FollowerPointerCard title={project.title} key={idx}>
            <CardContainer className="inter-var ">
              <CardBody className="bg-neutral-200 relative group/card  dark:hover:shadow-2xldark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
                <Link href={`/projects/${project.slug}`} className="block">
                  <CardItem translateZ="100" className="w-full ">
                    <Image
                      src={project.image}
                      height={600}
                      width={600}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="w-full text-right font-bold text-neutral-600 dark:text-white mt-6 flex justify-end items-end"
                  >
                    {project.status ? (
                      <Badge className="text-green-700 text-base flex items-center justify-center relative">
                        <div className="relative size-6 flex justify-center items-center">
                          <span className="absolute inline-flex p-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
                          <span className="absolute inline-flex p-1  rounded-full bg-green-500 opacity-75"></span>
                        </div>
                        Active
                      </Badge>
                    ) : (
                      <Badge className="text-red-700 text-base flex items-center justify-center relative">
                        <div className="relative size-6 flex justify-center items-center">
                          <span className="absolute inline-flex p-2 animate-ping rounded-full bg-red-400 opacity-75"></span>
                          <span className="absolute inline-flex p-1  rounded-full bg-red-500 opacity-75"></span>
                        </div>
                        Offline
                      </Badge>
                    )}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-6"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 min-h-20"
                  >
                    {project.description}
                  </CardItem>
                </Link>
                <CardItem
                  translateZ="50"
                  className="w-full mt-4 flex justify-start items-start gap-3"
                >
                  {project.tags.map((tag, tag_id) => {
                    return (
                      <Badge
                        className="bg-slate-900 text-slate-50 text-sm px-3 py-1"
                        key={tag_id}
                      >
                        #{tag}
                      </Badge>
                    );
                  })}
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Link →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    {project.links[0].label}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </FollowerPointerCard>
        );
      })}
    </div>
  );
}
