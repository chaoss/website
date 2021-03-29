

# CHAOSS Mentorship Alumni

The CHAOSS Community thanks all mentees and mentors who participated in Google Summer of Code, Google Season Of Docs and Outreachy.


# Google Summer Of Code Mentees
<details>
  <summary>Ria Gupta - GSOC 2020</summary>
  
  ### Ria Gupta
  Ria Gupta selected for GSoc 2020
  #### Project Title
  Social Currency Metric System
  #### Project Description
  Implementing Social Currency Metric System (SCMS) will be a huge milestone in providing a better and holistic view of project health in the open-source community. By adding social currency in the metric, we can quantitatively measure the value of community interactions to accurately gauge “reputation” of a community.
  #### Mentors
  Valerio Cosentino, Samantha Venia, Logan
</details>

<details>
  <summary>Tianyi Zhou - GSOC 2020</summary>
  
  ### Tianyi Zhou
  Tianyi Zhou selected for GSoC 2020
  #### Project Title
  Large Social Network Analysis and Anomaly Detection with Augur.
  #### Project Description
  Augur is a software that collect data for a list of given repositories and provide a variety of CHAOSS metrics to provides open source health and sustainability metrics.Then users can empirically investigate and uncover useful insights for software engineering, such as understanding the collaborative pattern.

  In the current stage, Augur is unable to mining the repositories to generate the co-editing information in the open source software development. This project idea is about to develop this kind of functions to enhance the Augur project. It will end up with a new data worker and analysis tool for fine-grained co-editing network which opens up a massive new source of high-resolution data on human collaboration patterns.

  Then I would like to establish the Augur server to mining and monitor the open source ecosystem (with 10000+ repositories or more). The collaboration networks and social trace data of all contributors in the open source ecosystem will be evaluated in terms of social network analysis. It will play a vital role in achieving Augur's goal towards analysis of open source organizations health as well as the goal of the CHAOSS project towards diversity and inclusion.
  #### Mentors
  Sean Goggins, Jonahz, Gabe Heim
</details>

<details>
  <summary>Sarit Adhikari - GSOC 2020</summary>
  
  ### Sarit Adhikari
  Sarit Adhikari selected for GSoC 2020
  #### Project Title
  Machine Learning for Anomaly Detection in Open Source Communities
  #### Project Description
  Open-source software development is a collaborative effort that requires decentralized decision making from different developers and maintainers. In order to measure the progress of the project, It is important to quantify the code changes across time. CHAOSS provides analytics and metrics to help open source communities measure the impact of the developer’s work on the project and the impact of the project on the community. Augur is a prototyped implementation of the CHAOSS Project on open source software metrics which systematically integrates data from several open-source repositories, issue trackers, mailing lists, etc. Anamoly detection is a common data science strategy of finding extreme data points (outliers), whose features differ vastly from other normal data points. From an open-source software development perspective, it detects unusual surges and drops in development activities like code-commits, pull-requests, etc. This project aims to identify the different types of anomalies that are available from trace data and deliver a personalized notification to the user using several machine learning techniques.
  #### Mentors
  Sean Goggins, Carter Landis, Gabe Heim
</details>

<details>
  <summary>Abhinav Bajpai - GSOC 2020</summary>
  
  ### Abhinav Bajpai
  Abhinav Bajpai selected for GSoC 2020
  #### Project Title
  Implementing GitLab Data Collection Worker and Mapper to bind the responses of GitLab API, Github API & the Augur schema.
  #### Project Description
  The project aims to develop a Gitlab collection worker closely tied up with the Github collection worker using mapper files to bind the intended attributes of their API responses and the Augur schema. Gitlab worker holds the responsibility to fetch progressive data related to Issues, Commits, Merge Requests etc from GitLab using python-gitlab API on which metrics could be generated. Additional modules like Data Setter module and Schema moderator would be implemented to work as a common channel for both the workers to push the collected API response into the Augur Database or to change the Augur schema by editing the mapper files. Data Setter module will additionally hold the responsibility of implementing the duplicate management mechanism.
  #### Mentors
  Sean Goggins, Carter Landis
</details>

<details>
  <summary>bistaastha - GSOC 2020</summary>
  
  ### bistaastha
  bistaastha selected for GSoC 2020
  #### Project Title
  Build Workflow process for CHAOSS D&I Badging Project.
  #### Project Description
  CHAOSS Diversity and Inclusion Badging program aims to encourage projects and events to obtain badges for good diversity and inclusion practices. This project will be about building a GitHub based workflow for CHAOSS D&I Badging program.

  This project would extend the existing CHAOSS Badging work and implement an Open Peer review process. Also, the project would focus on integrating GitHub based workflow bots.
  #### Mentors
  Matt Snell
</details>

<details>
  <summary>vchrombie - GSOC 2020</summary>
  
  ### vchrombie
  vchrombie selected for GSoC 2020
  #### Project Title
  Creating Quality models using GrimoireLab and CHAOSS metrics.
  #### Project Description
  GrimoireLab is a powerful open-source platform that provides support for monitoring and in-depth analysis of software projects. It produces a rich set of dashboards, which can be easily inspected by decision-makers to help them understand the evolution and health of their projects. Despite the large set of dashboards available in GrimoireLab, comparing projects between each other is not straightforward since it requires navigating and drilling down the data in different dashboards.

  Prosoul is a web application that empowers decision-makers with the means to create and manage their own quality models, which are useful means to evaluate and compare software projects. This project idea is about supporting the definition of Quality Models using GrimoireLab data and Prosoul.
 
  The main aim of the project is to design an approach to shape the GrimoireLab data in a format that can easily be consumed by Prosoul and implement it on the data obtained from a few data sources like git, github and mailing list repositories to obtain simple quality models.
  #### Mentors
  Valerio Cosentino, Aniruddha Karajgi
</details>

<details>
  <summary>Saicharan Reddy - GSOC 2020</summary>
  
  ### Saicharan Reddy
  Saicharan Reddy selected for GSoC 2020
  #### Project Title
  Implementation of GitLab Data Collection Worker & Test Coverage Improvement
  #### Project Description
  The primary goal of this project is to congregate data pertaining to GitLab issues, commits, merge requests amongst other entities & store it into the unified data model ecosystem of Augur. The project will use a task queue, a broker and worker instances to process the information at scale. Metrics for sustainability &. overall project health will be built upon the information stored in the unified model. This project also aims at increasing the overall test coverage of the project. Ergo, Unit & Integration tests for data collection workers would be implemented to ensure data consistency.
  #### Mentors
  Elita Nelson, Sean Goggins, Jonahz
</details>

<details>
  <summary>Akshara P - GSOC 2020</summary>
  
  ### Akshara P
  Akshara P selected for GSoC 2020
  #### Project Title
  Machine Learning for Anomaly Detection in Open Source Communities
  #### Project Description
  Augur is a Flask based prototyping web stack for CHAOSS metrics. It provides structured data mined from various sources like git repositories, mailing lists and issue trackers using a plugin architecture incorporating other open-source metrics projects like Facade and FOSSology. Augur enables users to keep track of the activities happening across the repositories they care about and compare their performance. The main goals of this project are to detect anomalies in various metrics in the open-source community and notify the community managers at the earliest; providing API endpoints for the required metrics, and a customized dashboard to visualize these metrics through charts. The completion of this project would result in a customized dashboard for every user, providing real-time statistics of the anomalous activities happening across their repositories.
  #### Mentors
  Elita Nelson, Sean Goggins, Gabe Heim
</details>

<details>
  <summary> Pratik Mishra - GSOC 2020</summary>
  
  ### Pratik Mishra
  Pratik Mishra selected for GSoC 2020
  #### Project Title
  Machine Learning for Anomaly Detection in Open Source Communities
  #### Project Description
  This project will play one of the most vital roles in achieving Augur's goal towards analysis of open source organisation health.It will not only provide visualisation but also offer useful Insights that will help users to find the reason behind anomalous activities or anomalous period.
  #### Mentors
  Elita Nelson, Sean Goggins, Gabe Heim
</details>

<details>
  <summary> Parth Sharma - GSOC 2019</summary>
  
  ### Parth Sharma
  Parth Sharma successfully completed GSoC 2019.
  #### Project Title 
  Build CHAOSS Risk and Growth Maturity and Decline Metrics in Augur
  #### Project Description
  Augur is fully functional prototyping web stack for CHAOSS metrics. It provides structured data mined from git repositories using a plugin architecture that incorporates other open source metrics projects like Facade and FOSSology. The main aim of this project is to extend Augur’s functionality by implementing Risk and Growth-Maturity-Decline CHAOSS metrics and use cases with a focus on the open source community manager use case. This project, with a focus on the community manager use case, will allow open source community managers to leverage Risk and Growth-Maturity-Decline metrics to better manage their communities and projects.
  #### Blog posts
  * [Weekly Posts](https://parthsharma2.github.io/posts)
  #### Social Media
  * [LinkedIn](https://www.linkedin.com/in/parthsharma2)
  * [Twitter](https://twitter.com/parthshar2)
  #### Mentors
  	Sean Goggins
</details>

<details>
  <summary> Bingwen Ma - GSOC 2019</summary>
  
  ### Bingwen Ma
  Binwen Ma successfully completed GSoC 2019.
  #### Project Title 
  Build CHAOSS Risk and Growth Maturity and Decline Metrics in Augur
  #### Project Description
  The project aims are to implement Risk metrics and other metrics within the Growth-Maturity-Decline CHAOSS metrics and use cases using Augur, focusing on what we have unearthed as the open source community manager use case.
  #### Blog posts
  * [Weekly Posts](https://blog.bing0ne.com/gsoc-final)
  #### Social Media
  * [Twitter](https://twitter.com/bing0ne)
  #### Mentors
  Sean Goggins, Matt Germonprez
</details>

<details>
  <summary> Parth Sharma - GSOC 2019</summary>
  
  ### Parth Sharma
  Parth Sharma successfully completed GSoC 2019.
  #### Project Title 
  Build CHAOSS Risk and Growth Maturity and Decline Metrics in Augur
  #### Project Description
  Augur is fully functional prototyping web stack for CHAOSS metrics. It provides structured data mined from git repositories using a plugin architecture that incorporates other open source metrics projects like Facade and FOSSology. The main aim of this project is to extend Augur’s functionality by implementing Risk and Growth-Maturity-Decline CHAOSS metrics and use cases with a focus on the open source community manager use case. This project, with a focus on the community manager use case, will allow open source community managers to leverage Risk and Growth-Maturity-Decline metrics to better manage their communities and projects.
  #### Blog posts
  * [Weekly Posts](https://parthsharma2.github.io/posts)
  #### Social Media
  * [LinkedIn](https://www.linkedin.com/in/parthsharma2)
  * [Twitter](https://twitter.com/parthshar2)
  #### Mentors
  	Sean Goggins
</details>

<details>
  <summary> Aniruddha Karajgi - GSOC 2019</summary>
  
  ### Aniruddha Karajgi
  Aniruddha Karajgi successfully completed GSoC 2019.
  #### Project Title 
  Implementing CHAOSS Metrics with Perceval
  #### Project Description
  The aim of this project is to create reference implementations and tests, primarily for the metrics defined by the Evolution Working Group, but also for the other working groups. This will be done by analyzing the data retrieved by Perceval from various sources using jupyter notebooks, pandas and matplotlib.
  #### Blog Posts
  * [Weekly Posts](https://polaris000.github.io/blog/final_report)
  #### Social Media
  * [LinkedIn](https://www.linkedin.com/in/polaris000)
  #### Mentors
  Jesus Gonzalez-Barahona, valcos, Pranjal Aswani
</details>

<details>
  <summary> Nishchith K Shetty - GSOC 2019</summary>
  
  ### Nishchith K Shetty
  Nishchith K Shetty successfully completed GSoC 2019.
  #### Project Title
  Support of Source Code Related Metrics.
  #### Project Description
  Graal produces analysis related to code complexity, quality, dependencies, vulnerability and licensing and the data produced conforms to the ones that can be processed by GrimoireLab. I will mainly be focusing on:

  * Adding support of source code related metrics to Grimoirelab with the help of analysis data produced by Graal.
  * Adapting Grimoirelab toolchain to be able to execute Graal and process the data produced by it.
  * Writing appropriate unit tests for additional backends, their corresponding supporting connectors, and methods.
  * Producing analytics related to proposed and calculated metrics* ( described below )
  * Adding documentation related to additional features and improvements in existing ones.

  Out of all the five backends provided by Graal, CoCom (Code Complexity) covers a vast majority of the popular languages and CoLic (Code License) supported by NOMOS & ScanCode helps us fetch license & copyright related information from software development repositories and is language independent. Addition of metrics related to these two backends during GSoC period could be applied to a wide range of projects in the future.
  #### Blog Posts
  * [Weekly Posts](https://nishchith.com//20blog19/08/coding-period-3-11.html)
  #### Social Media
  * [LinkedIn](https://www.linkedin.com/in/inishchith/)
  * [Twitter](https://twitter.com/inishchith)
  #### Mentors
  Jesus Gonzalez-Barahona, valcos, Pranjal Aswani
</details>

<details>
  <summary> Keanu Nichols - GSOC 2018</summary>
  
  ### Keanu Nichols
  Keanu Nichols successfully completed GSoC 2018.
  #### Project Title
  Reporting of CHAOSS Metrics.
  #### Project Description
  Writing Python code to query GrimoireLab Elastisearch databases and obtain from it the metrics relevant for the report. Possible technologies to achieve this aim include Python Pandas.
  #### Blog Posts
  * [Weekly Posts](https://kmn5409.github.io/keanu-nichols/gsoc/2018/08/10/gsoc-Week-14.html)
  #### Social Media
  * [LinkedIn](https://www.linkedin.com/in/keanu-nichols/)
  #### Mentors
  Sean Goggins, Jesus Gonzalez-Barahona
</details>

<details>
  <summary> Pranjal Aswani - GSOC 2018</summary>
  
  ### Pranjal Aswani
  Pranjal Aswani successfully completed GSoC 2018.
  #### Project Title
  Reporting of CHAOSS Metrics: Refactoring the existing code and extending the capabilities of the Manuscripts Project.
  #### Project Description 
  The Manuscripts project, which is a part of the Grimoire Toolset, helps us in analysing repositories and projects by creating a report based on predefined Metrics which give an overview of the project. The infrastructure of the current report generation system needs to be updated so that the users can spend less time on figuring out the hows and can focus on the functionality. The aim of this project is to extend the capabilities of the Manuscripts project so that it covers almost all the Metrics that can be calculated using the different data sources. At the end of this project, we will have a bigger and better reporting system.
  #### Blog Posts
  * [Weekly Posts](https://aswanipranjal.github.io/posts/page/2/)
  #### Social Media
  * [LinkedIn](https://www.linkedin.com/in/pranjalaswani/)
  #### Mentors
  Valerio Cosentino, Jesus Gonzalez-Barahona
</details>

# Google Season Of Docs Mentees
 
  Under Development

# Outreachy Mentees

<details>
  <summary> Ore-Aruwaji Oloruntola - Outreachy 2020</summary>
  
  
  ### Ore-Aruwaji Oloruntola
  Ore-Aruwaji Oloruntola was selected for Outreachy 2020
  #### Project Title
  Build Workflow Process for CHAOSS Diversity & Inclusion Badging
  #### Blog Posts
  * [Weekly Posts](https://medium.com/@darecoder/how-i-got-selected-as-an-outreachy-intern-b0c378a66bed)
  #### Social Media
  * [Twitter](https://twitter.com/thecraftman_)
  #### Mentors
  Matt Germonprez, Matt Snell, Saleh Abdel Motaal
</details>










































