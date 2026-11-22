# PhoneTech Accessories

## 1. Présentation du projet

**PhoneTech Accessories** est un site web e-commerce développé avec **WordPress** dans le cadre du projet Full Stack & Microservices.

Le site est destiné à une entreprise spécialisée dans la vente d’accessoires pour smartphones. Il permet aux visiteurs de découvrir les produits disponibles, consulter leurs caractéristiques, les ajouter au panier et contacter l’entreprise.

### Objectifs du projet

- Présenter l’entreprise PhoneTech Accessories.
- Présenter un catalogue d’accessoires pour smartphones.
- Permettre aux utilisateurs de consulter les produits.
- Permettre l’ajout des produits au panier.
- Publier des articles de blog liés aux smartphones et aux nouvelles technologies.
- Permettre aux visiteurs de contacter l’entreprise.
- Mettre en place une architecture WordPress fonctionnelle.

---

## 2. Technologies et outils utilisés

- **WordPress** : système de gestion de contenu utilisé pour développer le site.
- **Elementor** : outil utilisé pour créer et personnaliser les différentes pages.
- **WooCommerce** : extension utilisée pour gérer les produits, le catalogue et le panier.
- **Contact Form 7** : extension utilisée pour créer le formulaire de contact.
- **XAMPP** : environnement de développement local.
- **Apache** : serveur web local.
- **MySQL / MariaDB** : système de gestion de la base de données.
- **phpMyAdmin** : outil utilisé pour gérer et exporter la base de données.
- **HTML / CSS** : utilisés indirectement pour la structure et la présentation des pages.

---

## 3. Étapes de réalisation

### Étape 1 — Installation de l'environnement

Nous avons commencé par installer et configurer **XAMPP** afin de créer un environnement de développement local.

Les services suivants ont été activés :

- Apache
- MySQL

WordPress a ensuite été installé dans le dossier :

```text
C:\xampp\htdocs\wordpress
```

Une base de données a été créée dans MySQL pour le projet.

### Étape 2 — Installation et configuration de WordPress

Après l'installation de WordPress, nous avons configuré :

- Le nom du site : **PhoneTech Accessories**
- Les paramètres généraux de WordPress.
- Les pages principales du site.
- La structure de navigation.

### Étape 3 — Installation des extensions

#### Elementor

Elementor a été utilisé pour concevoir et personnaliser les pages du site.

#### WooCommerce

WooCommerce a été utilisé pour :

- Créer les produits.
- Afficher le catalogue.
- Gérer les prix.
- Ajouter les produits au panier.
- Gérer les pages Boutique, Panier et Validation de la commande.

#### Contact Form 7

Contact Form 7 a été utilisé pour créer le formulaire permettant aux visiteurs d'envoyer un message à l'entreprise.

---

## 4. Structure du site

### Accueil

La page d'accueil présente :

- Le nom de l'entreprise.
- Une présentation de PhoneTech Accessories.
- Un bouton permettant d'accéder au catalogue.
- Une section présentant les produits vedettes.
- Une présentation rapide de l'entreprise.

### Catalogue

La page Catalogue présente les accessoires disponibles sous forme de grille.

Les produits sont affichés grâce à WooCommerce.

Le catalogue contient notamment :

- Coques de protection.
- Chargeurs.
- Écouteurs sans fil.
- Batteries externes.
- Supports pour smartphones.

Les visiteurs peuvent consulter les produits et les ajouter au panier.

### À propos

Cette page présente l'entreprise, sa mission et ses valeurs.

### Blog

Le site contient trois articles :

1. **Les tendances des accessoires mobiles en 2026**
2. **Conseils pour bien entretenir son smartphone**
3. **Les innovations technologiques pour les smartphones**

### Contact

La page Contact contient :

- Les informations de contact de l'entreprise.
- Un formulaire de contact créé avec Contact Form 7.
- Une présentation des coordonnées de PhoneTech Accessories.

---

## 5. Fonctionnalités principales

Le site permet aux utilisateurs de :

- Consulter les différentes pages.
- Parcourir le catalogue.
- Consulter les produits.
- Voir les prix des produits.
- Ajouter un produit au panier.
- Consulter le panier.
- Accéder à la page de validation de commande.
- Lire les articles du blog.
- Contacter l'entreprise via le formulaire.

---

## 6. Architecture WordPress

L'architecture du projet repose sur **WordPress** comme système central.

```text
                    UTILISATEUR
                         |
                         v
                  Site WordPress
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
       Pages          Plugins         Thème
          |              |              |
          |       +------+-------+      |
          |       |              |      |
          v       v              v      v
      Elementor WooCommerce Contact Form 7
                    |
                    v
                Produits
                    |
                    v
                  Panier
                    |
                    v
              Base de données
                    |
                    v
                MySQL/MariaDB
```

### Composants de l'architecture

#### WordPress

WordPress constitue le cœur de l'application. Il permet de gérer les pages, articles, utilisateurs, extensions et paramètres du site.

#### Thème

Le thème WordPress contrôle principalement l'apparence générale du site : mise en page, navigation, en-tête, pied de page et styles généraux.

#### Elementor

Elementor permet de construire visuellement les différentes pages du site.

#### WooCommerce

WooCommerce ajoute les fonctionnalités e-commerce :

```text
Produits → Catalogue → Panier → Commande
```

#### Contact Form 7

Contact Form 7 permet de gérer le formulaire de contact.

#### Base de données

WordPress utilise une base de données **MySQL/MariaDB** pour stocker notamment :

- Les pages.
- Les articles.
- Les produits.
- Les utilisateurs.
- Les paramètres.
- Les données WooCommerce.

---

## 7. Architecture monolithique

Une architecture monolithique regroupe les principales fonctionnalités d'une application dans une seule application.

Dans notre cas, le site WordPress fonctionne principalement comme une application centralisée.

```text
+--------------------------------------+
|          APPLICATION WORDPRESS       |
|                                      |
|  Pages       Blog       WooCommerce  |
|  Elementor   Contact    Utilisateurs |
|                                      |
+------------------+-------------------+
                   |
                   v
              Base de données
```

### Avantages

- Architecture simple.
- Installation facile.
- Maintenance relativement simple pour un petit projet.
- Développement rapide.
- Une seule application à déployer.

### Inconvénients

- Les différentes fonctionnalités sont fortement liées.
- Une modification importante peut affecter plusieurs parties du système.
- La montée en charge peut être plus difficile.
- Une panne de l'application peut affecter l'ensemble du site.

---

## 8. Architecture Microservices

Une architecture microservices divise l'application en plusieurs services indépendants.

Chaque service possède une responsabilité spécifique.

Pour un système e-commerce plus complexe, on pourrait avoir :

```text
                    APPLICATION
                         |
       +-----------------+-----------------+
       |                 |                 |
       v                 v                 v
 Service Produits   Service Commandes   Service Utilisateurs
       |                 |                 |
       v                 v                 v
 Base Produits      Base Commandes    Base Utilisateurs

                         |
                         v
                  Service Paiement
```

Chaque service peut être développé, déployé et maintenu indépendamment.

---

## 9. Comparaison Monolithique / Microservices

| Critère | Architecture monolithique | Architecture microservices |
|---|---|---|
| Structure | Une seule application | Plusieurs services indépendants |
| Complexité | Faible à moyenne | Élevée |
| Développement | Plus simple | Plus complexe |
| Déploiement | Global | Service par service |
| Maintenance | Simple pour un petit projet | Plus complexe |
| Évolutivité | Limitée à grande échelle | Très bonne |
| Isolation des erreurs | Faible | Meilleure |
| Communication | Interne à l'application | API / réseau |
| Base de données | Généralement centralisée | Peut être séparée par service |
| Adapté à notre projet | Oui | Pas nécessaire pour ce projet |

---

## 10. Pourquoi WordPress convient à notre projet ?

Pour **PhoneTech Accessories**, WordPress est adapté car le projet est principalement un site e-commerce de petite taille.

WordPress permet de développer rapidement :

- Les pages du site.
- Le catalogue.
- Les produits.
- Le panier.
- Le blog.
- Le formulaire de contact.

WooCommerce ajoute les fonctionnalités nécessaires au commerce électronique sans devoir développer toutes les fonctionnalités depuis zéro.

Une architecture microservices serait plus adaptée à une plateforme beaucoup plus importante avec plusieurs équipes et de nombreux services indépendants.

---

## 11. Sauvegarde et export du projet

Afin de permettre la restauration du projet, deux éléments principaux ont été exportés.

### Base de données

La base de données WordPress a été exportée depuis **phpMyAdmin** au format :

```text
.sql
```

Elle contient les données nécessaires au fonctionnement du site.

### Fichiers WordPress

Les fichiers du site ont été compressés depuis :

```text
C:\xampp\htdocs\wordpress
```

dans une archive :

```text
wordpress.zip
```

Ces deux éléments permettent de conserver une copie du projet.

---

## 12. Structure des livrables

Le dossier final peut être organisé comme suit :

```text
PhoneTech-Accessories/
│
├── wordpress.zip
│
├── phone-tech.sql
│
└── README.md
```

### Description

- `wordpress.zip` : fichiers du site WordPress.
- `phone-tech.sql` : export de la base de données.
- `README.md` : documentation du projet.

---

## 13. Conclusion

Le projet **PhoneTech Accessories** a permis de mettre en place un site e-commerce fonctionnel avec WordPress.

Le site intègre :

- Une présentation de l'entreprise.
- Un catalogue de produits.
- Un système de panier grâce à WooCommerce.
- Un blog.
- Un formulaire de contact.
- Une base de données MySQL/MariaDB.

Le projet utilise principalement une architecture monolithique, ce qui est adapté à la taille et aux besoins actuels du site.

L'étude de l'architecture microservices permet cependant de comprendre comment une application plus importante pourrait être divisée en plusieurs services indépendants afin d'améliorer son évolutivité et sa maintenance.
