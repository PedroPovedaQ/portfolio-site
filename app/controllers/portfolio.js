import Controller from "@ember/controller";

export default Controller.extend({
  //eslint-disable-next-line
  portfolioItems: [
    {
      title: "MetaGrid™",
      description: `MetaGrid’s interactive dashboards and data visualizations facilitate rapid investigation and comprehensive understanding of risk.  Through these intuitive visualizations, every stakeholder—from IT, to security and risk teams, to executive management—can quickly understand the extent and impact of cyber incidents within their network in a single unified dashboard.  MetaGrid's powerful drill-down capabilities take you directly to the root cause for immediate remediation. Faster response time dramatically reduces the potential impact on your organization.`,
      imgURL: "img/metagrid.png",
      link: "https://www.redlambda.com/metagrid"
    },
    {
      title: "Rumii.net",
      description: "Material Design website featuring mobile-first design.",
      imgURL: "img/rumii.png",
      link: "https://www.rumii.net/landing"
    },
    {
      title: "Knetik Cloud",
      description:
        "Knetik Cloud's visualization rich dashboard allows you to both manage and analyze the usage of your created container.",
      imgURL: "img/knetik.png",
      link: "https://apps.knetikcloud.com/"
    }
  ]
});
