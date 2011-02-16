!SLIDE center small
# Interest Sets #
* Only send deep information about interests
* Maintain interest set by sending _subscribe_ packets
  to interests when they become interesting and
  _unsubscribe_ when they leave
* Define interests as weighted sum of interest metrics
    * _Proximity_ ![proximity formula](proximity.png)
    * _Aim_ ![aim formula](aim.png)
    * _Interaction Recency_ ![interaction recency](interaction_recency.png)

!SLIDE bullets
# Interest Weighting #
* each metric has different units so it needs different weights
* e.g., snipers don't care about proximity
* see workshop paper for more info
