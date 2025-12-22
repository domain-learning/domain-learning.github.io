---
title: Domain Learning Tutorial
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"
  margin: [0, 0, 0, 0]

sections:
  - block: hero
    id: home
    content:
      title: Domain Model Learning in AI Planning
      text: |
        
        <script src="/assets/js/custom.js"></script>

        <div class="full-gradient-background">
          <div class="gradient-sphere sphere-1"></div>
          <div class="gradient-sphere sphere-2"></div>
          <div class="gradient-sphere sphere-3"></div>
          <div class="glow"></div>
          <div class="particles-container"></div>
        </div>
        
        <p class="mt-12 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Tutorial at the AAAI 2026 Conference — 3.5 hours of theory and hands-on practice
        </p>
        <p class="text-lg leading-8 text-gray-600 dark:text-gray-300">
          8.30am - 12.30pm, January 21<sup>st</sup> 2026
        </p>
        <p class="text-lg leading-8 text-gray-600 dark:text-gray-300 mt-12">
          <b>Room TBD at TBD Floor</b>, Singapore EXPO
        </p>
        
        <!-- Centered Button -->
        <div class="flex justify-center mt-12 relative">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScGuUMdi7wfT5wbSFqeVcWsdommjFT4zfXDxijXW64RCMOImA/viewform?usp=dialog" target="_blank" >
          <button id="joinVirtualBtn" class="join-btn font-semibold text-xl py-3 px-6 rounded-full border border-gray-300">
            Rate This Tutorial
          </button>
          </a>

          <!-- Tooltip / small modal
          <div id="tooltip" class="fixed hidden bg-black text-white text-sm rounded px-3 py-2 pointer-events-none z-50">
            Link not yet available
          </div> 
           -->
        </div>

        <div class="flex justify-center items-center space-x-8 mt-12">
          <a href="https://www.queensu.ca/" target="_blank" rel="noopener">
            <img src="/assets/media/queens_logo_transparent.png" class="h-8 md:h-10 object-contain">
          </a>
          <a href="https://www.fbk.eu/" target="_blank" rel="noopener">
            <img src="/assets/media/fbk_logo_transparent.png" class="h-8 md:h-10 object-contain">
          </a>
          <a href="https://www.bgu.ac.il/" target="_blank" rel="noopener">
            <img src="/assets/media/bengurion_logo_transparent.png" class="h-8 md:h-10 object-contain">
          </a>
        </div> 
    
    
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      
  - block: markdown
    id: tutorial-content
    content:
      title: "" # empty so it won’t appear in the nav
      text: |
        <section id="tutorial-content" class="mt-0 py-12 rounded-2xl w-full">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">About the Tutorial</h2>
          <div class="w-full px-4">
            <p class="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-4">
              Planning is a long-standing challenge for Artificial Intelligence, and the state-of-the-art approach to address it requires formal <em>domain models</em> that capture key aspects of the environment. Obtaining such models is usually done by a human expert, and is often a bottleneck and inhibitor to real-world deployment of planning technology.  
            </p>
            <p class="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-4">
              <strong>This tutorial covers the literature for automatically learning planning domain models from observations.</strong> 
              This includes methods for learning actions' preconditions and effects, identifying useful state representations, and online model acquisition. 
            </p>
            <p class="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-4">
              Participants will gain a solid understanding of the core concepts in this active area of research, learn how it connects to Model-Based Reinforcement Learning, and become familiar with the state of the art. The tutorial also includes a hands-on session with open-source tools for <em>learning</em> and <em>evaluating</em> planning domain models.
            </p>
          </div>
        </section>

        <section id="tutorial-participants" class="mt-16 py-12 dark:bg-gray-900 rounded-2xl shadow-md w-full">
          <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
            <div>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">Is this tutorial for me?</h3>
              <p class="text-lg leading-8 text-gray-500">
                If you are interested in Automated Planning, Knowledge Representation, or Reinforcement Learning, the answer is definitely <strong>yes</strong>! Learning planning domain models is a growing research area related to all these fields. 
                This tutorial is designed for senior and junior researchers as well as practitioners, and is designed to equip you with the knowledge and resources to bring domain model learning into your own work. 
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-center">What background knowledge is required?</h3>
              <p class="text-lg leading-8 text-gray-500">
                Only a very basic background in automated planning is required; no more than the level of an undergraduate Introduction to AI class.
              </p>
            </div>
          </div>
        </section>
    design:
      css_class: "dark"

  - block: markdown
    id: schedule
    content:
      title: 
      text: |
        
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Tutorial Schedule (tentative)</h2>

        | Time       | Session                           | Speaker                           | Slides                           |
        |------------|-----------------------------------|-----------------------------------|-----------------------------------|
        | 08:30–09:15 | Introduction & Domain Learning Basics | <a href="/#roni">Roni Stern</a> | TBD |
        | 09:15–09:45 | Learning State Abstractions | <a href="/#roni">Roni Stern</a> | TBD |
        | 09:45–10:30 | Offline Learning Domain Models  | <a href="/#leonardo">Leonardo Lamanna</a> | TBD |
        | 10:30–11:00 | Coffee Break &#9749;                |  |  |
        | 11:00–11:45 | Hands-on Session | <a href="/#leonardo">Leonardo Lamanna</a> | TBD |
        | 11:45–12:30 | Online Learning and Open Challenges | <a href="/#roni">Roni Stern</a> | TBD |
    design:
      css_class: "dark"

  - block: markdown
    id: organizers
    content:
      title: 
      text: |

        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Organizers</h2>

        <div class="space-y-6 max-w-8xl mx-auto px-4 dark">

          <!-- Organizer 1 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow px-4 py-4 card"
          id = "roni">
            <img src="/assets/media/roni.png" alt="Organizer 1" class="w-32 h-32 rounded-full object-cover">
            <div>
              <h3 class="font-semibold">Roni Stern</h3>
              <p class="text-gray-600">
                Professor and head of the Software Engineering program at Ben Gurion University of the Negev, Israel. Among other roles in the AI community, he served as the President of the Symposium on Combinatorial Search (SoCS), and the co-Program Chair for the International Conference on Automated Planning (ICAPS).
              </p>
            </div>
          </div>

          <!-- Organizer 2 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow px-4 py-4 card"
          id = "chris">
            <img src="/assets/media/christian.jpg" alt="Organizer 2" class="w-32 h-32 rounded-full object-cover">
            <div>
              <h3 class="font-semibold">Christian Muise</h3>
              <p class="text-gray-600">
                Assistant Professor at Queen's University in Kingston, Ontario, Canada. His research focuses on model understanding in the field of automated planning, and his work has been recognized with both a Distinguished Dissertation Award and an Influential Paper Award from the International Conference on Automated Planning and Scheduling (ICAPS). He also sits on the ICAPS council after serving as Program Co-Chairs for ICAPS 2024.
              </p>
            </div>
          </div>

          <!-- Organizer 3 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow px-4 py-4 card"
          id = "leonardo">
            <img src="/assets/media/leonardo.jpeg" alt="Organizer 3" class="w-32 h-32 rounded-full object-cover">
            <div>
              <h3 class="font-semibold">Leonardo Lamanna</h3>
              <p class="text-gray-600">
                Postdoctoral Researcher at Fondazione Bruno Kessler (FBK), Italy, working on integrating learning and symbolic planning for agents operating in unknown environments. He received his PhD in 2023 at the University of Brescia; his PhD thesis was recognized the "Marco Cadoli" 2023 award from the Italian Association for Artificial Intelligence, and published by IOS press "Frontiers in Artificial Intelligence and Applications" book series.
              </p>
            </div>
          </div>

        </div>
    design:
      css_class: "dark"

  - block: markdown
    id: resources
    content:
      title:
      text: |

        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Resources</h2>

        #### Misc:

        - AMLGym: benchmarking action model learning [GitHub](https://github.com/LamannaLeonardo/AMLGym) [Docs](https://amlgym.readthedocs.io/en/latest/) 
        - MAcq: The Model Acquisition Toolkit: [GitHub](https://github.com/AI-Planning/macq)  [Website](https://macq.planning.domains/) 
        - The AIPlan4EU Unified Planning Library: [GitHub](https://github.com/aiplan4eu/unified-planning) [Docs](https://unified-planning.readthedocs.io/en/latest/)
        - PDDL generators: [GitHub](https://github.com/AI-Planning/pddl-generators)

        ---


        #### (Some) References

        - Arora A., Fiorino H., Pellier D., Etivier M. & Pesty S. *A review of learning planning action models*. Knowledge Engineering Review, 2018.
        - Asai M. & Muise C. *Learning Neural-Symbolic Descriptive Planning Models via Cube-Space Priors: The Voyage Home (to {STRIPS})*. IJCAI, 2020.
        - Brendan J., Le H. & Stern R. *Safe Learning of Lifted Action Models*. KR, 2021.
        - Lamanna L., Saetti A., Serafini L., Gerevini A. & Traverso P. *Online Learning of Action Models for PDDL Planning*. IJCAI, 2021.
        - Callanan E., De Venezia R., Armstrong V., Paredes A., Chakraborti T. & Muise C. *MACQ: A Holistic View of Model Acquisition Techniques*. ICAPS KEPS, 2022.
        - Brendan J. & Stern R. *Learning Probably Approximately Complete and Safe Action Models for Stochastic Worlds*. AAAI, 2022.
        - Asai M. and Kajino H. and Fukunaga A. and Muise C. *Classical planning in deep latent space*. JAIR, 2022.
        - Mordoch A., Brendan J. & Stern R. *Learning Safe Numeric Action Models*. AAAI, 2023.
        - Mordoch A., Stern R. & Brendan J. *Safe Learning of PDDL Domains with Conditional Effects*. ICAPS, 2024.
        - Lamanna L. & Serafini L. *Action model learning from noisy traces: a probabilistic approach*. ICAPS, 2024.
        - Le H., Brendan J. & Stern R. *Learning Safe Action Models with Partial Observability*. AAAI, 2024.
        - Lamanna L., Serafini L., Saetti A., Gerevini A. & Traverso P. *Lifted action models learning from partial traces*. AIJ, 2025.
        - ...
        

        ---
    design:
      css_class: "dark"
---
