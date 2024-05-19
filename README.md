<a name="readme-top"></a>

[![React][React.js]][React-url]
[![Springboot][Springboot.bdg]][springboot-url]
[![Docker][Docker.bdg]][Docker-url]

<br>

<div width="100px" height="100px" align="center">
<image width="100px" height="100px" src="https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"/>
</div>

<div align="center">
  <h3 align="center">springboot and react application secured by basic authentication</h3>

  <p align="center">
    Esempio di applicazione web avente Frontend React.js e Backend Springboot.
      <br>
    Una basic authentication implementata con Spring Security protegge i servizi di Backend.
</div>

<br>
<br>

## Getting Started & Development
Per agevolare l'installazione, il progetto è stato organizzato all'interno di un Docker Compose che include tre componenti principali:

- fe-react, accessibile sulla porta :80
- be-springboot, raggiungibile sulla porta :8080
- db-employee (postgres), raggiungibile sulla porta :5435

Per semplificare la pipeline di build e deploy è stato creato uno script denominato <code>deploy-all.sh</code>. 
Questo script gestisce tutte le fasi necessarie, tenendo conto delle preferenze dell'utente:
- Effettua il down dell'attuale istanza del compose.
- Richiede all'utente se necessario procedere ad una nuova build del Backend:
   <br>Sì: effettua la maven build del progetto e rimuove la vecchia immagine docker affinchè venga sostituita con la nuova.
- Richiede all'utente se necessario procedere ad una nuova build del Frontend:
   <br>Sì: effettua la npm build del progetto e rimuove la vecchia immagine docker affinchè venga sostituita con la nuova.
- Lancia una nuova istanza del compose (se non già presente, ogni immagine viene buildata nuovamente).

Instruzione per il lancio: <code>sh deploy-all.sh</code>

Durante le operazioni di sviluppo del frontend, è consigliabile mantenere l'intero progetto in esecuzione su Docker al fine di poter sfruttare l'instradamento verso le API di backend fornito dall'NGINX.

L'applicazione avviata in modalità sviluppo (<code>localhost:3000</code>) punterà l'Nginx in esecuzione su Docker grazie all'attributo "proxy" impostato nel suo package.json.

Per avviare il Frontend in modalità di sviluppo, esegui il seguente comando: <code>cd fe-react && npm run start</code>

<br><br>

## Components
Di seguito la descrizione di funzionamento delle 3 componenti:
<br>

### db-employee
tabelle: <br>
- employees: raccoglie le informazioni degli impiegati censiti nell'applicazione.
- users: raccoglie le informazioni degli utenti censiti nell'applicazione.
<br><br>

### be-springboot
classi: <br>
- SecurityexampleApplication.java: entry point dell'applicazione.<br>
   Al fine di rendere indipendente ogni test, al suo interno è stato codificato il comportamento previsto in sede di avvio: <br>
   - Censimento dell'utente di default <code>{ username:'ale', password:'ale' }</code>; <br>
   - Censimento di alcuni impiegati di prova</code> - tale procedura si combina con la rigenerazione del database per effetto della property <code>spring.jpa.hibernate.ddl-auto=create-drop</code>;
<br><br>

- SecurityConfig.java: configurazione delle politiche di autenticazione.<br>
   Attraverso questa classe vengono definite le politiche di autenticazione necessarie per l'accesso alle API esposte:<br>
   - tipologia: basic;<br>
   - service per logiche di controllo: UserDetailsService.java;<br>
   - APIs non coperte da autenticazione: <code>/register</code>
   - IP da cui sono consentite chiamate: <code>frontend.security.host</code>
<br><br>

- UserService.java: logiche per l'autenticazione.<br>
   Classe che implementa UserDetailsService.java definendo la procedura di controllo delle credenziali immesse dall'utente:
   - metodo: loadUserByUsername;<br>
   - oggetto: UserPrincipalDTO.java;
<br><br>

- UserPrincipalDTO.java: oggetto per la trasmissione dei dati utili all'autenticazione.<br>
   E' l'implementazione di UserDetails.java, ovvero l'oggetto usato da Spring Security per la trasmissione dei dati utente.
<br><br>

- UserPasswordEncoder.java: configurazione delle politiche di crittografia previste per la password utente.<br>

<br><br>

### fe-react
componenti e configurazioni: <br>
- default.conf: configurazione NGINX con policy di redirect.<br>
   ogni chiamata effettuata dal Frontend dovrà essere reindirizzata come di seguito:
    - <code>localhost:3000/be-spring-security/*</code> ---> <code>be-spring-security:8080/</code> (L'IP effettivo corrispondente al container "be-spring-security" verrà recuperato in modo automatico attraverso docker). <br>
  

- user.service.js<br>
    il metodo "registerUser" effettua la chiamata al Backend per la registrazione di un nuovo utente.
     <br>Questa API non è coperta da autenticazione

- employee.service.js<br>
  il metodo "listEmployees" effettua la chiamata al Backend al fine di ottenere la lista degli impiegati censiti.
  <br>Questa API è coperta da autenticazione, pertanto necessita l'header <code>Authorization</code> composta dal metodo "get_basic_authentication_header" di "authentication.service.js"

- authentication.service.js<br>
  il metodo "get_basic_authentication_header" compone la header <code>Authorization</code> necessaria alla basic authentication implementata nel Backend.
  <br>Il "value" di questa header si compone di:
  - prefisso: "Basic ";
  - token: base64 del json <code>{ username:'ale', password:'ale' }</code>;
  
<br><br>

<br>
<br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Springboot.bdg]: https://img.shields.io/badge/Springboot-20232A?style=for-the-badge&logo=springboot&logoColor=8dc891
[springboot-url]: https://e7.pngegg.com/pngimages/931/804/png-clipart-spring-framework-software-framework-java-application-framework-web-framework-java-leaf-text-thumbnail.png
[Docker.bdg]: https://img.shields.io/badge/Docker-20232A?style=for-the-badge&logo=docker&logoColor=61DAFB
[Docker-url]: https://w7.pngwing.com/pngs/219/411/png-transparent-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-cloud-computing.png
