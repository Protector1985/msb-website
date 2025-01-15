// Mock data fetching function (replace this with your API or database call)
async function getTabsData() {
    return [
        {
          id: "tab1",
          title: "Security Design",
          content: [
            "Our Security Design process involves an in-depth evaluation of your property and existing security setup. This step ensures that your new security program provides maximum risk mitigation for you and your family.",
            "Our detailed security design report often exceeds 50 pages, leaving no stone unturned. We evaluate access points, security vulnerabilities, landscaping, fencing, existing security hardware, and more to develop a comprehensive plan tailored to your needs.",
          ],
        },
        {
          id: "tab2",
          title: "Protector",
          content: [
            "A dedicated team of protectors is carefully selected and trained specifically for your property. These experts adapt quickly to your needs and establish a customized 'baseline' for your environment.",
            "Once operational, your team of protectors will effectively process and respond to any baseline deviations. These may include inputs from your tailor-made early warning system, camera footage, or the professional instincts of your trained protectors.",
          ],
        },
        {
          id: "tab3",
          title: "Early Warning",
          content: [
            "The early warning system acts as the information hub for your protectors. We prioritize meticulous setup and precise sensor placement to ensure maximum effectiveness.",
            "A properly installed system keeps your protectors focused and responsive without overwhelming them. It alerts the protector to potential threats, allowing them to follow tailored protocols designed specifically for your security program.",
          ],
        },
        {
          id: "tab4",
          title: "CCTV",
          content: [
            "We collaborate with the most reputable hardware suppliers in the industry to provide analytics-enhanced cameras capable of identifying intruders. Integrated with your early warning system, your camera system offers protectors a unique vantage point to coordinate a security response.",
            "Once your analytics system is installed, our Research and Development team will continuously refine AI models to further enhance your security program and support your protectors.",
          ],
        },
        {
          id: "tab5",
          title: "Alarm System",
          content: [
            "A professional-grade alarm system connected to a central station serves as the final component in your security program. This ensures a rapid response to potential threats.",
            "We partner with some of the most experienced alarm system installers in Beverly Hills and Southern California. These experts will install a customizable, high-grade system that is resilient against attacks and tailored to your specific needs.",
          ],
        },
      ];
  }

  export default getTabsData