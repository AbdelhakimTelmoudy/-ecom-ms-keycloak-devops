# Développement d'une Architecture Micro-Service


## Objectif

L'objectif de cette activité est de développer une application basée sur une architecture micro-service permettant de gérer des factures contenant des produits et appartenant à un client. Cette architecture comporte plusieurs services distincts, notamment des services pour la gestion des clients, des produits, des factures, ainsi qu'une gateway et un annuaire Eureka.

---

## Architecture du Système

L'architecture de l'application repose sur les micro-services suivants :

1. **Customer-Service** : Gestion des clients.
2. **Inventory-Service** : Gestion des produits.
3. **Spring Cloud Gateway** : Point d'entrée pour la gestion des requêtes des clients, avec un système de routage statique et dynamique.
4. **Eureka Discovery Service** : Annuaire des services pour une gestion dynamique des micro-services.
5. **Billing-Service** : Service de facturation, utilisant Open Feign pour communiquer avec les autres services.
6. **Configuration Service** : Service pour gérer les configurations de l'application.
7. **Angular Client** : Application frontend pour interagir avec les services backend.



## Détails du Travail

### 1. **Création des Micro-services**

#### Customer-Service
- Création du micro-service `customer-service` pour gérer les informations des clients.

#### Inventory-Service
- Création du micro-service `inventory-service` pour gérer les produits disponibles.

#### Billing-Service
- Création du service de facturation `billing-service` en utilisant Open Feign pour consommer les services des autres micro-services.

### 2. **Gateway Spring Cloud**

- Mise en place de **Spring Cloud Gateway** pour gérer les requêtes des clients et les rediriger vers les services appropriés.

### 3. **Configuration Dynamique du Routage**

- Configuration dynamique du routage à l'aide de Spring Cloud Gateway et Eureka Discovery Service.

### 4. **Eureka Discovery Service**

- Mise en place de `Eureka Discovery Service` pour la gestion des services dans l'architecture micro-service.

### 5. **Création du Client Angular**

- Développement d'une application frontend en **Angular** pour permettre aux utilisateurs d'interagir avec les micro-services via des APIs RESTful.


## Conclusion

Ce projet permet de mettre en œuvre une architecture micro-service complète, avec des services interconnectés, la gestion des configurations, et l'intégration d'une application frontend pour l'interaction utilisateur. Il offre également une expérience pratique de gestion des services à l'aide de Spring Cloud et Eureka.

---

## Remerciements

Merci à **Mohamed YOUSSFI** pour l'accompagnement dans la réalisation de cette activité et à tous les contributeurs des ressources partagées.
