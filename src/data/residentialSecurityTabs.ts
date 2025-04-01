// This allows tabs to be rendered server side since this mock fetch is called on the server
async function getTabsData() {
  return [
    {
      id: "tab1",
      title: "Security Design",
      content: [
        "Our Security Design process involves an in-depth evaluation of your property and existing security setup. This step ensures your new security program provides maximum risk mitigation for you and your family.",
        "Our detailed security design report often exceeds 50 pages, leaving no stone unturned. We evaluate access points, security vulnerabilities, landscaping, fencing, existing security hardware, and more to develop a comprehensive plan tailored to ultra-high-net-worth estates in Beverly Hills, Malibu, and Montecito.",
      ],
    },
    {
      id: "tab2",
      title: "Protector",
      content: [
        "A dedicated team of elite protectors is carefully selected and trained specifically for your estate. These experts—veterans of high-risk executive protection assignments—adapt quickly to your environment and establish a customized baseline for personal and residential protection.",
        "Once operational, your team will monitor and respond to baseline deviations using our proprietary early warning technology and decades of real-world executive protection experience.",
      ],
    },
    {
      id: "tab3",
      title: "Early Warning",
      content: [
        "Our customized early warning system is a core element of any high-net-worth security protocol. With precise sensor placement and intelligent alert filtering, we create a scalable system that keeps your protectors alert without overwhelming them.",
        "Tailored for estate security in Beverly Hills and beyond, the system provides actionable intelligence, allowing for faster threat response and seamless integration with close protection teams.",
      ],
    },
    {
      id: "tab4",
      title: "CCTV",
      content: [
        "We deploy analytics-enhanced surveillance systems with industry-leading hardware that identify and track potential intruders. Integrated with early warning protocols, our CCTV systems serve as a force multiplier for estate and celebrity security.",
        "Our in-house Research and Development team continuously refines AI-based recognition tools to keep your residential security ahead of evolving threats—especially in high-risk, high-value locations like Malibu, Hidden Hills, and Montecito.",
      ],
    },
    {
      id: "tab5",
      title: "Alarm System",
      content: [
        "Our professional-grade alarm systems form the final safeguard in your security program. Linked to a central station, they provide rapid response options in line with industry best practices for ultra-high-net-worth families.",
        "We collaborate with the most experienced luxury estate alarm installers in Beverly Hills and Southern California to deliver highly resilient, customizable systems resistant to physical and cyber tampering.",
      ],
    },
  ];
}

export default getTabsData;
