---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

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


        <p class="mt-12 text-lg leading-8 text-gray-600 dark:text-gray-300">Tutorial at the AAAI 2026 Conference — 3.5 hours of theory and hands-on practice</p>
        <p class=" text-lg leading-8 text-gray-600 dark:text-gray-300">January TBD 2026</p>
        <p class="text-lg leading-8 text-gray-600 dark:text-gray-300"><b>Room TBD at TBD Floor</b>, Singapore EXPO</p>
        

        <div class="flex justify-center items-center space-x-8 mt-12">
          <a href="https://www.bgu.ac.il/" target="_blank" rel="noopener">
            <img src="/assets/media/bengurion_logo_transparent.png" class="h-8 md:h-10 object-contain">
          </a>
          <a href="https://www.queensu.ca/" target="_blank" rel="noopener">
            <img src="/assets/media/queens_logo_transparent.png" class="h-8 md:h-10 object-contain">
          </a>
          <a href="https://www.fbk.eu/" target="_blank" rel="noopener">
            <img src="/assets/media/fbk_logo_transparent.png" class="h-8 md:h-10 object-contain">
          </a>
        </div> 
    
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      # background:
      #   color: "navy"
      #   image:
      #     # Add your image background to `assets/media/`.
      #     filename: bg-triangles.svg
      #     filters:
      #       brightness: 0.5
      #     size: cover
      #     position: center
      #     parallax: false

  - block: markdown
    id: schedule
    content:
      title: Tutorial Schedule (tentative)
      text: |
        | Time       | Session                           | Speaker                           | Slides                           |
        |------------|-----------------------------------|-----------------------------------|-----------------------------------|
        | 09:00–09:30 | Introduction & Domain Learning Basics | TBD | TBD |
        | 09:30–10:30 | Offline Learning Domain Models  |TBD | TBD |
        | 10:30–11:00 | Learning State Abstractions | TBD | TBD |
        | 11:00–11:30 | Coffee Break &#9749;                | TBD | TBD |
        | 11:30–12:00 | Hands-on Session | TBD | TBD |
        | 12:00–12:30 | Online Learning and Open Challenges | TBD | TBD |
    design:
      css_class: "dark"

  - block: markdown
    id: organizers
    content:
      title: Organizers
      text: |

        <div class="space-y-6 max-w-8xl mx-auto px-4 dark">

          <!-- Organizer 1 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow px-4 py-4 card">
            <img src="/assets/media/roni.png" alt="Organizer 1" class="w-32 h-32 rounded-full object-cover">
            <div>
              <h3 class="font-semibold">Roni Stern</h3>
              <p class="text-gray-600">
                Professor and head of the Software Engineering program at Ben Gurion University of the Negev, Israel. Among other roles in the AI community, he served as the President of the Symposium on Combinatorial Search (SoCS), and the co-Program Chair for the International Conference on Automated Planning (ICAPS).
              </p>
            </div>
          </div>

          <!-- Organizer 2 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow px-4 py-4 card">
            <img src="/assets/media/christian.jpg" alt="Organizer 2" class="w-32 h-32 rounded-full object-cover">
            <div>
              <h3 class="font-semibold">Christian Muise</h3>
              <p class="text-gray-600">
                Assistant Professor at Queen's University in Kingston, Ontario, Canada. His research focuses on model understanding in the field of automated planning, and his work has been recognized with both a Distinguished Dissertation Award and an Influential Paper Award from the International Conference on Automated Planning and Scheduling (ICAPS). He also sits on the ICAPS council after serving as Program Co-Chairs for ICAPS 2024.
              </p>
            </div>
          </div>

          <!-- Organizer 3 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow px-4 py-4 card">
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
      title: Resources
      text: |
        #### 🔗 Misc:

        - MAcq: The Model Acquisition Toolkit: [Github](https://github.com/AI-Planning/macq)  [Website](https://macq.planning.domains/) 
        - The AIPlan4EU Unified Planning Library: [Github](https://github.com/aiplan4eu/unified-planning) [Docs](https://unified-planning.readthedocs.io/en/latest/)
        - PDDL generators: [Github](https://github.com/AI-Planning/pddl-generators)

        ---


        #### 📚 References

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
