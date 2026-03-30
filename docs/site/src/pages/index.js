// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const localizedHomeUrl = new URL(useBaseUrl("/"), siteConfig.url).toString();
  const localeTag = i18n.currentLocale === "ko" ? "ko-KR" : "en-US";

  const text = {
    heroTitle: translate({
      id: "pages.home.hero.title",
      message: "Sui Documentation",
      description: "Homepage hero title",
    }),
    heroSubtitle: translate({
      id: "pages.home.hero.subtitle",
      message: "Discover the power of Sui through examples, guides, and concepts",
      description: "Homepage hero subtitle",
    }),
    developers: translate({
      id: "pages.home.cards.developers.title",
      message: "Developers",
      description: "Homepage card title for developers",
    }),
    gettingStarted: translate({
      id: "pages.home.links.gettingStarted",
      message: "Getting Started",
      description: "Homepage link text to getting started docs",
    }),
    developerBasics: translate({
      id: "pages.home.links.developerBasics",
      message: "Sui Developer Basics",
      description: "Homepage link text to guides overview",
    }),
    move: translate({
      id: "pages.home.links.move",
      message: "Move",
      description: "Homepage link text to Move concepts",
    }),
    validatorsAndOperators: translate({
      id: "pages.home.cards.validators.title",
      message: "Validators and Node operators",
      description: "Homepage card title for validators and node operators",
    }),
    validatorConfiguration: translate({
      id: "pages.home.links.validatorConfiguration",
      message: "Validator Configuration",
      description: "Homepage link text to validator configuration",
    }),
    runSuiFullNode: translate({
      id: "pages.home.links.runSuiFullNode",
      message: "Run a Sui Full Node",
      description: "Homepage link text to full node guide",
    }),
    suiBridgeNodeConfiguration: translate({
      id: "pages.home.links.suiBridgeNodeConfiguration",
      message: "Sui Bridge Node Configuration",
      description: "Homepage link text to Sui Bridge node configuration",
    }),
    aboutSui: translate({
      id: "pages.home.cards.about.title",
      message: "About Sui",
      description: "Homepage card title for about Sui",
    }),
    tokenomics: translate({
      id: "pages.home.links.tokenomics",
      message: "Tokenomics",
      description: "Homepage link text to tokenomics docs",
    }),
    cryptography: translate({
      id: "pages.home.links.cryptography",
      message: "Cryptography",
      description: "Homepage link text to cryptography docs",
    }),
    standards: translate({
      id: "pages.home.links.standards",
      message: "Standards",
      description: "Homepage link text to standards docs",
    }),
    references: translate({
      id: "pages.home.cards.references.title",
      message: "References",
      description: "Homepage card title for references",
    }),
    suiDappKit: translate({
      id: "pages.home.links.suiDappKit",
      message: "Sui dApp Kit",
      description: "Homepage external link text to Sui dApp Kit",
    }),
    suiApi: translate({
      id: "pages.home.links.suiApi",
      message: "Sui API",
      description: "Homepage link text to Sui API docs",
    }),
    suiFramework: translate({
      id: "pages.home.links.suiFramework",
      message: "Sui Framework",
      description: "Homepage external link text to Sui Framework docs",
    }),
    rustSdk: translate({
      id: "pages.home.links.rustSdk",
      message: "Rust SDK",
      description: "Homepage external link text to Rust SDK docs",
    }),
    resources: translate({
      id: "pages.home.cards.resources.title",
      message: "Resources",
      description: "Homepage card title for resources",
    }),
    suiEcosystem: translate({
      id: "pages.home.links.suiEcosystem",
      message: "Sui Ecosystem",
      description: "Homepage external link text to Sui ecosystem",
    }),
    awesomeSui: translate({
      id: "pages.home.links.awesomeSui",
      message: "Awesome Sui",
      description: "Homepage link text to Awesome Sui docs",
    }),
    suiBlog: translate({
      id: "pages.home.links.suiBlog",
      message: "Sui blog",
      description: "Homepage external link text to Sui blog",
    }),
    developerCheatSheet: translate({
      id: "pages.home.links.developerCheatSheet",
      message: "Sui Developer Cheat Sheet",
      description: "Homepage link text to the developer cheat sheet",
    }),
    buildDapp: translate({
      id: "pages.home.cta.buildDapp",
      message: "Build your dApp on Sui",
      description: "Homepage call-to-action text",
    }),
    metaTitle: translate({
      id: "pages.home.seo.title",
      message: "Sui Documentation",
      description: "Homepage SEO title",
    }),
    metaDescription: translate({
      id: "pages.home.seo.description",
      message:
        "Guides, concepts, standards, and references for building on Sui.",
      description: "Homepage SEO description",
    }),
    metaKeywords: translate({
      id: "pages.home.seo.keywords",
      message:
        "Sui documentation, Sui guides, Sui concepts, Sui standards, Sui reference, Move",
      description: "Homepage SEO keywords",
    }),
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: text.metaTitle,
    description: text.metaDescription,
    url: localizedHomeUrl,
    inLanguage: localeTag,
  };

  const HomeCard = (props) => {
    const { title, children } = props;
    return (
      <div className={`p-px col-span-3 w-[350px]`}>
        <div className={styles.card}>
          {title && <h4 className="h4 text-white">{title}</h4>}
          <div className={styles.cardLinksContainer}>{children}</div>
        </div>
      </div>
    );
  };
  const HomeCardCTA = (props) => {
    const { children } = props;
    return (
      <div className={`p-px col-span-3 w-[350px]`}>
        <div className={styles.cardCTA}>
          <div className={styles.cardLinksContainer}>{children}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <meta name="keywords" content={text.metaKeywords} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </script>
      </Head>
      <Layout title={text.metaTitle} description={text.metaDescription}>
        <div
          className="overflow-hidden min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: "#000000",
          }}
        >
          <div className="w-full mt-8 mb-4 mx-auto">
            <div className={styles.heroText}>
              <h1 className="h1 center-text text-white">{text.heroTitle}</h1>
              <h2 className="h2 center-text h3" style={{ color: "#89919F" }}>
                {text.heroSubtitle}
              </h2>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-2 max-w-[1066px] mx-auto pb-16 py-4">
            <HomeCard title={text.developers}>
              <Link
                className={`${styles.cardLink} plausible-event-name=homepage+start+button`}
                to="./guides/developer/getting-started/sui-install"
              >
                {text.gettingStarted}
              </Link>
              <Link className={styles.cardLink} to="/guides">
                {text.developerBasics}
              </Link>
              <Link
                className={styles.cardLink}
                to="./concepts/sui-move-concepts"
              >
                {text.move}
              </Link>
            </HomeCard>
            <HomeCard title={text.validatorsAndOperators}>
              <Link
                className={styles.cardLink}
                to="./guides/operator/validator/validator-config"
              >
                {text.validatorConfiguration}
              </Link>
              <Link
                className={styles.cardLink}
                to="./guides/operator/sui-full-node"
              >
                {text.runSuiFullNode}
                <span className="block bg-auto bg-[url(../static/img/index/right-arrow.svg)]"></span>
              </Link>
              <Link
                className={styles.cardLink}
                to="./guides/operator/bridge-node-configuration"
              >
                {text.suiBridgeNodeConfiguration}
              </Link>
            </HomeCard>
            <HomeCard title={text.aboutSui}>
              <Link className={styles.cardLink} to="./concepts/tokenomics">
                {text.tokenomics}
              </Link>
              <Link className={styles.cardLink} to="./concepts/cryptography">
                {text.cryptography}
              </Link>
              <Link className={styles.cardLink} to="standards">
                {text.standards}
              </Link>
            </HomeCard>
            <HomeCard title={text.references} aux>
              <Link
                className={styles.cardLink}
                to="https://sdk.mystenlabs.com/dapp-kit?ref=blog.sui.io"
              >
                {text.suiDappKit}
              </Link>
              <Link className={styles.cardLink} to="/references/sui-api">
                {text.suiApi}
              </Link>
              <Link
                className={styles.cardLink}
                to="https://github.com/MystenLabs/sui/tree/main/crates/sui-framework/docs"
              >
                {text.suiFramework}
              </Link>
              <Link
                className={styles.cardLink}
                to="https://github.com/MystenLabs/sui/tree/main/crates/sui-sdk"
              >
                {text.rustSdk}
              </Link>
            </HomeCard>
            <HomeCard title={text.resources} aux>
              <Link
                className={styles.cardLink}
                to="https://sui.directory/?_project_type=api%2Cdeveloper-tools%2Cinfrastructure%2Csdk"
              >
                {text.suiEcosystem}
              </Link>
              <Link className={styles.cardLink} to="/references/awesome-sui">
                {text.awesomeSui}
              </Link>
              <Link className={styles.cardLink} to="https://blog.sui.io/">
                {text.suiBlog}
              </Link>
              <Link
                className={styles.cardLink}
                to="guides/developer/dev-cheat-sheet"
              >
                {text.developerCheatSheet}
              </Link>
            </HomeCard>
            <HomeCardCTA>
              <Link
                className={styles.cardCTALink}
                to="/guides/developer/getting-started/hello-world"
              >
                <span>{text.buildDapp}</span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.01312 0.5L5.05102 1.45391L8.39164 4.80332L0 4.80332L0 6.19668L8.39164 6.19668L5.05102 9.54073L6.01312 10.5L11 5.5L6.01312 0.5Z"
                    fill="#298DFF"
                  />
                </svg>
              </Link>
            </HomeCardCTA>
          </div>
        </div>
      </Layout>
    </>
  );
}
