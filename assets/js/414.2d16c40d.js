(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{887:function(t,e,a){"use strict";a.r(e);var s=a(50),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-theme-for-the-orbit-resume-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-for-the-orbit-resume-template"}},[t._v("#")]),t._v(" Vuepress Theme for the Orbit Resume Template")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xriley",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xiaoying Riley"),a("OutboundLink")],1),t._v(" has kindly provided a free Resume/CV Template for developers based on the "),a("a",{attrs:{href:"https://getbootstrap.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap"),a("OutboundLink")],1),t._v(" design language.  You can check out her other work at "),a("a",{attrs:{href:"http://themes.3rdwavemedia.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("her website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This template is an adaptation of the "),a("a",{attrs:{href:"https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Orbit template"),a("OutboundLink")],1),t._v(" to Vuepress.")]),t._v(" "),a("h2",{attrs:{id:"using-the-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-theme"}},[t._v("#")]),t._v(" Using the theme")]),t._v(" "),a("p",[t._v("First, add the theme to your Vuepress site:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress vuepress-theme-orbit\n")])])]),a("p",[t._v("Create a "),a("code",[t._v(".vuepress/config.js")]),t._v(" file.  Here is a minimal one:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Alan Doe | Resume'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The resume for Alan Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orbit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    colorScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keppel'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Then create a resume in "),a("code",[t._v("README.md")]),t._v('.  This involves two parts: The front matter, which must include an "author" section that describes the sidebar contents, and some Markdown content.\nYou can find an example '),a("RouterLink",{attrs:{to:"/themes/example/"}},[t._v("in the example directory")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"color-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color-schemes"}},[t._v("#")]),t._v(" Color Schemes")]),t._v(" "),a("p",[t._v("There are six color schemes:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pacificblue")])]),t._v(" "),a("li",[a("code",[t._v("keppel")])]),t._v(" "),a("li",[a("code",[t._v("seagreen")])]),t._v(" "),a("li",[a("code",[t._v("rose")])]),t._v(" "),a("li",[a("code",[t._v("saffron")])]),t._v(" "),a("li",[a("code",[t._v("cadet")])])]),t._v(" "),a("p",[t._v("You can specify the color scheme in the theme configuration (as above) or in the front matter of your resume (allowing you to produce multiple resumes with different color schemes).  You can\nalso add your own color scheme by adding a new palette in your style overrides.  See "),a("code",[t._v("styles/colors.styl")]),t._v(" for examples.")]),t._v(" "),a("h2",{attrs:{id:"sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" Sidebar")]),t._v(" "),a("p",[t._v("The sidebar is driven from the "),a("code",[t._v("author")]),t._v(" section within the front matter for the resume.")]),t._v(" "),a("h2",{attrs:{id:"global-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-components"}},[t._v("#")]),t._v(" Global Components")]),t._v(" "),a("p",[t._v("To assist writing a resume, we provide a number of Vue components that you can include with your Markdown:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('---\nauthor:\n  {\n    name: "Alan Doe",\n    tagline: "Full Stack Developer",\n    picture: "images/profile.png",\n    email: "alan.doe@website.com",\n    phone: "0123 456 789",\n    links:\n      {\n        link: "https://portfoliosite.com",\n        linkedin: "https://linkedin.com/in/alandoe",\n        github: "https://github.com/alandoe",\n        twitter: "https://twitter.com/alandoe",\n      },\n    education:\n      [\n        {\n          title: "MSc in Computer Science",\n          place: "University of London",\n          dates: "2016-2018",\n        },\n        {\n          title: "BSc in Computer Science",\n          place: "Bristol University",\n          dates: "2011-2015",\n        },\n      ],\n    languages:\n      {\n        "English": "(Native)",\n        "French": "(Professional)",\n        "Spanish": "(Professional)",\n      },\n    interests: ["Climbing", "Snowboarding", "Cooking"],\n  }\n---\n')])])]),a("p",[t._v("Most sections will disappear naturally if you don't specify the relevant piece of the "),a("code",[t._v("author")]),t._v(" object.  Links can be 'link' or any icon from the "),a("a",{attrs:{href:"https://fontawesome.com/icons?d=gallery&s=brands&m=free",target:"_blank",rel:"noopener noreferrer"}},[t._v("brands selection of Font Awesome"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Note that if you don't follow the style of the "),a("code",[t._v("education")]),t._v(", "),a("code",[t._v("languages")]),t._v(", and "),a("code",[t._v("interests")]),t._v(" sections, the site build will fail.")]),t._v(" "),a("h3",{attrs:{id:"heading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[t._v("#")]),t._v(" Heading")]),t._v(" "),a("p",[t._v("Use this as a section heading, with icons.  Any "),a("a",{attrs:{href:"https://fontawesome.com/icons?d=gallery&s=solid&m=free",target:"_blank",rel:"noopener noreferrer"}},[t._v("solid icon from Font Awesome"),a("OutboundLink")],1),t._v(" can be used for the icon.  For example:")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Heading")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("anchor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Naval Experience"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Heading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"jobdetails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobdetails"}},[t._v("#")]),t._v(" JobDetails")]),t._v(" "),a("p",[t._v("Each job in your experience section should be wrapped in a "),a("code",[t._v("JobDetails")]),t._v(" component, which provides the title, company, place, and dates for the job:")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("JobDetails")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Principal Product Manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2004 - 2012"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("company")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Splunk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("place")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Seattle, WA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\nEnter your experience within the job here.\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("JobDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"skill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skill"}},[t._v("#")]),t._v(" Skill")]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("Skill")]),t._v(" component to indicate how good you are at specific skills.  The range is 0-100:")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Skill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("JavaScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("progress")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Skill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);