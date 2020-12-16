## Speakers and Session Descriptions

### Daniel Izquierdo

![Daniel Izquierdo](https://chaoss.github.io/website/CHAOSScon/2019EU/img/DanielIzquierdo.png)

_Data Analyst - Bitergia_

Daniel Izquierdo is co-founder of Bitergia, a start-up focused on providing metrics and consultancy about open source projects. His main interests about open source are related to the community itself, trying to help community managers, organizations and developers to better understand how the project is performing. He has contributed to several open analytics dashboards such as the OpenStack, Wikimedia or Xen. He has participated as speaker giving details about gender diversity in OpenStack, InnerSource metrics strategy at OSCON, and other metrics-related talks.

Session: **Putting order into CHAOSS: metrics to analyze code development**

> CHAOSS Growth, Maturity and Decline working group provides several metrics definitions focused on code development. Using GrimoireLab we have put some of those definitions into action by setting up a collection of panels for tracking and visualizing specific datasets. During the talk we will present this collection of panels taking a deeper look to the metrics applied in a real use case.

Session: **Creating a Collection of Panels**

> During the last months, we have been dealing with dozens of panels and its number keeps increasing. It is expected to have many more, and it is becoming hard to deal with this amount of information. We need to scale!
>
> The concept of collections of panels aims at bringing some order into the existing repository. A panel collection is just a set of Kibana dashboards. In this case, each panel is a Kibana dashboard consisting of a set of widgets.
>
> GrimoireLab CHAOSS GMD code development metrics is an example where this concept can be applied. What about having a collection of GMD panels? This would be based on publicly available and could be built on top of GrimoreLab, so anyone can deploy the panels and get them working for their own purposes.
>
> We will show the collection built on top real data, retrieved and processed by means of GrimoireLab projects. From that point, we will take a walk on the panels offering a closer look at the metrics. Looking at real numbers ease to get a deeper understanding of the metrics, as we can see them in action.

Session: **Diversity & Inclusion WG Tutorial**

> While it is recognized that diversity and inclusion are central to the health of open source communities, numbers lag and the ability to foster inclusive environments remains challenging. The CHAOSS Project’s Diversity & Inclusion Working group is focused on establishing a set of community-curated, peer-validated, research-informed standards and best practices to measure, and in turn, increase, diversity and inclusion across open source communities. In this interactive tutorial, you will contribute to this work by breaking into groups to define several diversity and inclusion metrics. Let’s work together to make our collective open source communities more welcoming, broader and heterogeneous.


### Ray Paik

![Ray Paik](https://chaoss.github.io/website/CHAOSScon/2019EU/img/RayPaik.png)

_Community Manager - GitLab_

Ray worked at the Linux Foundation and was responsible for the day-to-day operation of the OPNFV community since its launch in 2014. He has over 15 years of experience in the high-tech industry in roles ranging from software engineer, product manager, program manager, account manager, and team lead at companies such as EDS, Intel and Medallia. Ray lives in Sunnyvale, CA with his wife and daughter and all three are loyal season ticket holders of the San Jose Earthquakes soccer team.

Session: **Metrics in a company-led open source project**

> Ray used community metrics in two very different open source communities over the past 4+ years.  One was a foundation hosted project (www.opnfv.org) with dozens of member companies, and the other is a single-company led open source project at GitLab (https://about.gitlab.com/). In this session, Ray will discuss both similarities and different challenges that he has seen when working with metrics in these two communities. In addition, Ray will share learnings during his transition to a company-led project including identification of goals and stakeholders for community metrics.  Ray will then discuss how metrics are being used and analyzed at GitLab.

### Sean Goggins

![Sean Goggins](https://chaoss.github.io/website/CHAOSScon/2019EU/img/SeanGoggins.png)

_Professor - University of Missouri_

Sean is an open source software researcher and a founding member of the Linux Foundation’s working group on community health analytics for open source software CHAOSS, co-lead of the CHAOSS metrics software working group and leader of the open source metrics tool AUGUR which can be forked and cloned and experimented with on GitHub. After a decade as a software engineer, Sean decided his calling was in research. His open source research is framed around a broader agenda of social computing research, which he pursues as an associate professor of computer science at the University of Missouri.

Session: **Growth-Maturity-Decline WG Tutorial**

> The GMD working group is exploring metrics related to growth-maturity-decline and other focus areas (such as risk). Our idea is to go top down, from the definition of the focus areas down to the goals that we want to fulfill in those areas, the questions that we would like to answer to reach those goals, and finally the metrics that could help us to better answer those questions. We also intend to work in reference implementations for the metrics. In parallel, we also work bottom-up, by collecting use case from real life.
>
> This will be a workshop to explain all of this in more detail, to also explain our procedures, and how anyone can contribute. The workshop will also include a discussion on the current status of the working group, and on specific aspects of the focus areas, goals, questions and metrics we're considering. Anyone is welcome to submit issues and pull requests in advance, to propose topics of their interest.

### Valerio Cosentino

![Valerio Cosentino](https://chaoss.github.io/website/CHAOSScon/2019EU/img/ValerioCosentino.png)

_Software Engineer - Bitergia_

Valerio is a software engineer at Bitergia. His expertise and interests include software analysis, database technologies and open source. Before joining Bitergia, he was a Phd student at IBM France and postdoctoral fellow in a couple of research teams between France and Spain. He obtained his Ph.D. in 2013.

Session: **Graal: Get the Knowledge Out of Your Code**

> Source code contains plenty of information useful derive insightful metrics about your software project. Such an information can be extracted with source code analysis tools. however, they do not often come with features to support incremental analysis. Furthermore they generally lack of support to combine their results with other analysis tools or relate them with other software project data (e.g., bugs, pull requests).
>
> This lighting talk presents Graal, an open source tool that helps you to collect data from your source code in an easy and consistent way, and offers the results in a flexible JSON format, useful to ease the bridging with analysis and/or visualization tools. Graal relies on a a customizable and incremental approach that allows combining and manipulating the output of existing source code analysis tools.
>
> Graal leverages on Perceval, that simplifies the collection of project data by covering more than 30 well-known tools and platforms related to contributing to open source development. Graal shares with Perceval the same output format, which enables you to combine together all your software project data to define cross-cutting analytics. Perceval and Graal are fully open source and part of GrimoireLab, a popular platform to define software development analytics for your project. GrimoireLab is developed by Bitergia and it is one of the assets of the CHAOSS project of the Linux Foundation.

Session: **SortingHat: Managing Contributor Identities in your Software Project**

> Contributors of open source projects rely on a plethora of tools (e.g., Git, Slack, GitHub) to coordinate and support development-related activities. Such tools often provide authentication mechanisms that require a combination of an email, an username and a full name. Thus, the same contributor may end up having different identities on the tools he is working on. In a scenario where you want to check the contributions of an individual in your project, you may face a difficult nut to crack. What to do then? Of course, you may develop ad-hoc scripts or perform manual work to merge identities, or you can use SortingHat.
>
> SortingHat helps you to track contributor identities and their related information such as gender, country and organization enrollments. It allows you to manipulate identities interactively as well as to load them via batch files (useful for projects with large communities). SortingHat functionalities can also be used through Hatstall, which provides a handy graphical interface for non-technical users. In this talk you will see how easy is to manage contributor identities and how to empower your project with analytics focused on individual contributions.

> SortingHat and HatStall are two components of GrimoireLab, an industry strong open source platform developed by Bitergia, which offers commercial software analytics and is part of the CHAOSS project of the Linux Foundation.



## Organizing Committee

*
