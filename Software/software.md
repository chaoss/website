# Software Overview and Use Cases

Both Augur and GrimoireLab are excellent tools to help you derive meaningful health insights for open source projects and ecosystems, but they both take very different approaches. As a result of these differences, one of them might be a better choice depending on what you need to do. 

GrimoireLab’s distinctive features are that you can use it to:



* get an aggregated view of your software development activity across a wide variety of channels (e.g., repositories, mailing lists, chat tools, wikis) and create a central place for data mining across sources to make sense of this information for your particular context.
* apply a large number of existing, pre-made visualizations to spot trends and continuously monitor the health of your open source projects and ecosystems and customize those visualizations using OpenSearch queries to drill in on interesting data.
* see GrimoireLab in action in the [CHAOSS Dashboard](https://chaoss.biterg.io/).

Augur’s distinctive features are that you can use it to:



* focus on data from GitHub and GitLab platforms, which can scale to tens of thousands of repositories, and use Augur’s relational database as a data engineering tool to write custom queries that explore complex or unanticipated questions while performing in-depth research.
* explore data about compliance, security, dependencies, and related software topics to better understand potential risks associated with an open source project in addition to using visualizations to learn about community health.
* see Augur in action using [8-knot](https://metrix.chaoss.io/repo_overview).

While anyone can use either tool to derive meaningful insights:



* Data scientists, researchers, and other data analysts might be more comfortable writing custom queries using Augur’s relational database for in-depth research.
* Community managers, engineering / product teams, or project leaders might appreciate the ease of spotting trends using GrimoireLab’s visualizations across various use cases.

This overview contains only a few of the many scenarios that might bring someone to use CHAOSS tools. These are both complex tools with many features and functionality that can’t adequately be summarized within a few points. In addition, every open source project is unique, and the needs for data about open source projects and ecosystems can vary wildly. While we hope that the above summary might help you select the right tool for your needs, we encourage you to explore additional benefits and features below in more detail before making a final selection. 


# More Benefits and Features


## Augur



* Data is collected incrementally and includes all messages and commits associated with issues, pull requests, and pull request reviews, including historical data. This high velocity collection has been tested for up to 100,000 repositories, enabling assessment of diverse open source software ecosystems. 
* Collection and analysis goes beyond the counting of activities to include license coverage and license type information, COCOMO based software complexity and cost of replacement data by project and file, software dependency scanning, measurement of dependency [LibYears](https://libyear.com/), and time series persistent OpenSSF Scorecard information.
* Understanding of community health is extended through automatically detecting unusual activity by performing computational linguistics machine learning analysis and contribution anomaly detection.
* Users can explore complex or unanticipated questions while performing in-depth research using Augur’s relational database or API to write custom queries.
* Augur includes data visualizations through an extensible frontend built using tools familiar to data scientists (e.g., Dash and Plotly) upon which [8Knot](https://metrix.chaoss.io/repo_overview) is developed.

For more details, visit the [Augur repository](https://github.com/chaoss/augur).


## GrimoireLab



* Data is produced in a consistent way for clear reporting and trusted insights. Data is collected from 30+ data sources, including historical data. Incremental data collection allows for quicker updates. Data quality is ensured through consistent data decay prevention methods.
* Raw data is enriched to provide deeper insights and allow analysis that goes beyond the basic count of events. For example, the onion analysis identifies core, regular, and casual contributors over time. The attraction and retention metrics identify contributors that recently joined a project and those that have become inactive. 
* Dashboarding solutions are provided on top of the data for exploring data and creating custom visualizations and dashboards that are shareable with links and live data
* Management interfaces and APIs are available for updating organizational affiliations and deduplicating contributors
* Access to data is available in three levels: (1) User interface for exploring and sharing data; (2) Management interface for creating visualizations and dashboards, and for managing affiliations; (3) Data interface through OpenSearch API to raw and enriched data for custom analysis in different tools like Jupyter Notebooks.
* Network analysis allows uncovering relationships and interconnections between projects, repositories, contributors, and organizations.
* Data privacy is built in to support GDPR compliant operation.

For more details, visit the [GrimoireLab website](https://chaoss.github.io/grimoirelab/).
