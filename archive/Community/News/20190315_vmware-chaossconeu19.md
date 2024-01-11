# Tracking Open Source Contributions – My Contribution to CHAOSScon Europe 2019

_By Alexandre Courouble_

_This blog post originally appeared on the [VMware Open Source Blog](https://blogs.vmware.com/opensource/2019/03/05/tracking-open-source-contributions/) on March 5, 2019._

[Back in October](https://blogs.vmware.com/opensource/2018/10/09/chaosscon-2018-reflections/), my colleague John Hawley and I reflected on our visit to last year’s U.S. CHAOSScon where we gave a talk on [“The Pains and Tribulations of Finding Data.”](https://www.youtube.com/watch?v=nPQYDYVyfYc) At the end of that post, we mentioned learning more at the conference about Grimoire Lab’s [Perceval tool](https://github.com/chaoss/grimoirelab-perceval) for tracking data from multiple open source projects on a single dashboard. That opportunity helped me develop the work that was the subject of a talk I gave at the recent [CHAOSScon Europe 2019](https://chaoss.community/chaosscon-2019-eu/).

In my new [presentation](https://youtu.be/04TQaMWGLxA), I described a tool I’ve created to track the open source contributions of all the developers in VMware’s Open Source Program Office. The code itself isn’t open sourced at present, but its capabilities and outcomes will be of interest to any open source group hoping to better understand the open source contributions its members are collectively making. We’re also planning to use what we’ve learned to extend an existing [open source metrics tool](https://github.com/chaoss/augur) to make it more user centric.

The idea for our contribution tracker grew out of a pretty straightforward need. Every engineer in our team was already tracking their open source contributions, but they were doing it by laboriously copying and pasting the information from every project they’d worked on. This easily took up an hour or more of their time every week. Then, our manager had to spend even more time compiling everything he’d been sent into a legible and useful report.

The Tracker makes all of that work redundant. Currently, it works with GitHub to track:

  * pull requests merged
  * comments and reviews on pull requests
  * issues opened
  * issues commented on

It does this by calling the GitHub API with a query about each of these data points for every engineer on our team. The data is stored in an SQLite database and then we use a small Python app to serve it to a web interface. Not everyone in our team works on GitHub based projects, of course, which is where [Perceval](https://github.com/chaoss/grimoirelab-perceval) comes in. In those cases, we use Perceval to access the git repository of each non-GitHub-based project our team members are working on and then search that data for their emails and/or usernames.

For non-GitHub projects, we can see:

  * Commits authored
  * Commits merged into the repository

The Contribution Tracker automatically aggregates this data and offers a view into it through the web interface. It actually does more than aggregating data by contributor. It offers:

  * A **user-specific view** showing pull requests, comments, reviews and issues over a particular time period.
  * A **summary view** that lists all team pull requests, comments, reviews and issues over a particular time period.
  * A **projects and organization view** showing all commits made by all team members on a specific project.
  * A **charts view** showing the evolution of open source contributions over time.

Crucially, the Tracker outputs data in the form of whole English sentences. Instead of just a number in a report, you see a set of sentences saying things like: “Alex C. committed [name] pull request” and so on, with links to every item worked on.

The tool has already accomplished its primary goal by saving everyone on our team a ton of time. Now individual engineers don’t need to do any tracking of their own and all our manager has to do is open the tool, select the outputs they want, then copy and paste them into an email to distribute as needed.

I wanted to share this story at CHAOSScon in case our experience was valuable to others. From the positive responses I received, it seems like it could well be. One concrete outcome is that, based on this work, we’re hoping to help extend the open source metrics tool [Augur](https://github.com/chaoss/augur) to offer user-based metrics. Augur comes out of [Professor Sean Goggin’s](https://engineering.missouri.edu/faculty/sean-goggins/) lab at the University of Missouri and currently offers only project-centered metrics. Like GrimoireLab, Augur displays a series of metrics regarding a specific project hosted on GitHub. We found Augur to have a simpler user interface and a smaller barrier of entry than GrimoireLab’s.

We’re also talking about adding the narrative capability developed for our internal tool to Augur – when you can output data in the form of legible English sentences, you make that data accessible to a wider range of potential users. In addition, I had a very positive conversation with the people who built Perceval, which helped me understand how we could optimize our tool to make maximal use of Perceval as we develop it further.

The larger context of this work, and of my presentation, is that for-profit corporations are increasingly looking to build open source teams. Unsurprisingly, they want their employees to collect metrics that demonstrate the value they are adding to the sector. If we can make it easier for these teams to track their achievements, we’re helping build support from entities that have a lot of resources available to move open source forward.

_Stay tuned to the [VMware Open Source Blog](https://blogs.vmware.com/opensource/) for future conference recaps and follow us on Twitter ([@vmwopensource](https://twitter.com/vmwopensource))._
