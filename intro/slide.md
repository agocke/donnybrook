!SLIDE blue-title

# Donnybrook #
## Enabling Large-Scale, High-Speed, Peer-to-Peer Games ##
### Ashwin Bharambe, John R. Douceur, Jacob R. Lorch, Thomas Moscibroda, Jeffrey Pang, Srinivasan Seshan, and Xinyu Zhuang ###

!SLIDE
# Why? #
* Donnybrook is a real word 
    * "A scene of uproar and disorder; a heated argument"
    * Thanks Zach
* Broadband connections are asymmetric
* Upload is the limiting factor
* P2P gaming is overloaded as upload approaches O(n^2)

!SLIDE center
# Current approaches #
* Area of interest filtering
    * Only send updates to "nearby" players
* Dumb system—prevents LoTR-style awesomeness
![lotr](returnoftheking2.JPG) 

!SLIDE
# Focus on focus, not geography #
* Human attention naturally limits who we need to push updates to
* Problem domain: FPS games with UDP updates
* Use doppelgängers instead—only need periodic updates
* Define an _interest set_ instead of an area of interest
* Things to watch out for: divergence, churn (avg. turnover 68%), balance
