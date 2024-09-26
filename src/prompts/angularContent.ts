import { getRandomNumber } from "../utils/utils";

export function generatePromptForAngularPostTemplate() { 
    const topic = articleTopics[getRandomNumber(70)];

    return `
        Write a LinkedIn post about ${topic}, focusing on a common use case. The post should include a title, engaging content, 2-3 key takeaways and relevant hashtags. 
        Do not use any markup elements, as the post will be created via the LinkedIn API and won't support formatting. 
        Use emojis sometimes.
        Write it in brazilian portuguese, except for reserved words when you're explaining a feature that uses that word.
        After the post content, provide a small code snippet in plain text format without any markdown syntax or formatting. Separate the content from the code snippet with the following line:

        %%%%%%%%%%

        Ensure the code snippet is included at the end of the post as plain text, without any backticks or additional formatting. The entire post should be formatted for LinkedIn without explicit section labels.
    `
};

const articleTopics = [
    "Introduction to Angular Components",
    "Understanding Angular Modules",
    "Angular Dependency Injection: A Complete Guide",
    "Building Reactive Forms in Angular",
    "Lazy Loading in Angular for Better Performance",
    "Creating Reusable Angular Directives",
    "Using Angular Pipes to Transform Data",
    "Exploring Angular Services and HTTP Client",
    "Routing and Navigation in Angular Applications",
    "State Management in Angular with NgRx",
    "Handling API Requests in Angular with RxJS",
    "What's New in Angular 17?",
    "Standalone Components in Angular: A New Paradigm",
    "Signals in Angular: What You Need to Know",
    "Improving SEO in Angular with Angular Universal",
    "Unit Testing in Angular with Jasmine and Karma",
    "Building Progressive Web Apps (PWA) with Angular",
    "Reactive Programming with RxJS: A Beginner’s Guide",
    "RxJS Operators: Map, MergeMap, SwitchMap, and ConcatMap Explained",
    "Error Handling in RxJS: Best Practices",
    "RxJS Subjects: Understanding BehaviorSubject, ReplaySubject, and AsyncSubject",
    "RxJS Observables vs Promises: When to Use What?",
    "RxJS in Angular: Real-time Data Streams",
    "Node.js Event Loop: How It Works Under the Hood",
    "Asynchronous Programming in Node.js with Async/Await",
    "Building REST APIs with Node.js and Express",
    "Middleware in Express: What It Is and How to Use It",
    "Node.js Streams: Processing Large Data Efficiently",
    "File Handling in Node.js: Read, Write, and Stream",
    "Authentication in Node.js with Passport.js",
    "Securing Express Apps with Helmet.js",
    "Working with WebSockets in Node.js for Real-time Apps",
    "Optimizing Node.js Applications for Performance",
    "Best Practices for Structuring a Node.js Application",
    "Error Handling in Express: The Right Way",
    "Node.js with TypeScript: Type-safe Server Development",
    "Connecting Node.js with PostgreSQL using Knex.js",
    "Database Migrations with Knex.js",
    "Writing Raw SQL Queries with Knex.js",
    "Using Knex.js with Transactions for Data Consistency",
    "Building Query Builders in Knex.js",
    "Knex.js Schema Building: How to Design Your Database",
    "Handling Database Relationships with Knex.js",
    "Managing PostgreSQL in Node.js with Knex and Objection.js",
    "Knex.js Performance Tuning: How to Optimize Your Queries",
    "Creating Complex SQL Queries with Knex.js",
    "Implementing Soft Deletes with Knex.js",
    "Introduction to Express.js Routing",
    "Using CORS in Express for Cross-Origin Requests",
    "Setting Up GraphQL with Express and Node.js",
    "Session Management in Express.js with Express-Session",
    "Introduction to Angular Animations",
    "Optimizing Angular Apps for Performance",
    "Angular Change Detection Strategy: OnPush vs Default",
    "Using Angular Schematics for Scaffolding Applications",
    "Angular Material: Creating Beautiful UIs with Angular",
    "Angular Internationalization (i18n) Made Simple",
    "Server-Side Rendering (SSR) with Angular Universal",
    "Using Angular Guards to Secure Routes",
    "Handling Forms and Form Validation in Angular",
    "Deploying Angular Apps with Docker",
    "Version Control in Knex.js: Rolling Back Migrations",
    "Combining RxJS with Angular’s Event Binding",
    "RxJS Subjects vs Observables: Key Differences",
    "Angular Service Workers: Building Offline-Ready Apps",
    "File Uploading in Node.js with Multer and Express",
    "Real-time Notifications in Angular with Socket.io and RxJS",
    "Angular's Renderer2: Manipulating the DOM",
    "Tracking Database Changes in Node.js using Knex.js Triggers",
    "Microservices in Node.js with Express and Docker"
  ];
  