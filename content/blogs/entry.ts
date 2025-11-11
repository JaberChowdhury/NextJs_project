const blogs = [
  {
    title: "Good Reads",
    description: "A curated collection of essent...",
    date: "Sep 18, 2025",
    tag: "thought",
    tagline: "Check this out",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    slug: "good-reads",
  },
  {
    title: "Calorie Requirements",
    description: "A guide to calculating your calorie requirements",
    date: "Aug 28, 2025",
    tag: "tutorial",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    slug: "calorie-requirements",
  },
  {
    title: "How I Got a Professional Email on My...",
    description:
      "A quick 2-minute setup using Cloudflare and Gmail, no paid hosting or tech headaches.",
    date: "Aug 10, 2025",
    tag: "tutorial",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    slug: "how-i-got-a-professional-email-on-my",
  },
  {
    title: "The Power of 1%: Habits for an...",
    description:
      "Small daily, weekly, and monthly actions that compound into massive growth—tailored for founders and engineers.",
    date: "Jun 16, 2025",
    tag: "thought",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    slug: "the-power-of-1-habits-for-an",
  },
  {
    title: "i love coding",
    description: "hahaha ",
    date: "Jun 16, 2025",
    tag: "thought",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    slug: "my-blog",
  },
];

// Entry array for Next.js static routes
const entry = blogs.map((blog) => ({ slug: blog.slug }));
console.log({ entry });
export { blogs, entry };
