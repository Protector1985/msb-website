"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define the prop types for tabsData
interface TabData {
  id: string;
  title: string;
  content: string[];
}

interface ElectronicProtectionProps {
  tabsData: TabData[];
}

const ElectronicProtection: React.FC<ElectronicProtectionProps> = ({ tabsData }) => {
  const openTabSection = (evt: React.MouseEvent<HTMLLIElement>, tabName: string) => {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element> = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    let tablinks: HTMLCollectionOf<Element> = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).className = (tablinks[i] as HTMLElement).className.replace("current", "");
    }

    let element = document.getElementById(tabName);
    if (element) {
      element.style.display = "block";
    }
    (evt.currentTarget as HTMLElement).className += " current";
  };

  return (
    <>
      <section className="electronic-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="electronic-content">
                <h2>Our Approach to Residential Security</h2>

                <div className="electronic-tab-wrap">
                  <div className="tab electronic-tab">
                    {/* Tabs Navigation */}
                    <ul className="tabs">
                      {tabsData.map((tab) => (
                        <li
                          key={tab.id}
                          className={tab.id === "tab1" ? "current" : ""}
                          onClick={(e) => openTabSection(e, tab.id)}
                        >
                          {tab.title}
                        </li>
                      ))}
                    </ul>

                    {/* Tabs Content */}
                    <div className="tab_content">
                      {tabsData.map((tab) => (
                        <div
                          key={tab.id}
                          id={tab.id}
                          className="tabs_item"
                          style={{ display: tab.id === "tab1" ? "block" : "none" }}
                        >
                          {tab.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                          <Link href="/about" className="default-btn">
                            Learn More
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="electronic-img">
                <Image
                  src="/img/electronic-img.png"
                  alt="Residential Security Systems"
                  width={570}
                  height={485}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectronicProtection;
