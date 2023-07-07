# Hypermedia Applications - Implementation

# Documentation

```
Team : AJBR - All JavaScript, But Really (TypeScript)
```

```
Members:
Milo Brontesi - 10704659
Elia Maggioni - 10610008
Lucas Manini - 10625965
Giordano Urettini - 10694208
```

```
Website link: https://hypermedia-application-2023.vercel.app/
```

```
Repository link: https://github.com/zibasPk/hypermedia-application-
```

## Introduction

This document serves as documentation for our project’s implementation, de-
scribing how we’ve distributed the work amongst our group, motivating our
implementation choices and providing a thorough description of the structure of
our project, its server endpoints and the components we’ve implemented.
Finally, we list and briefly describe the extra modules we’ve used in our project.

## Description of work division

Website design : Giordano Urettini

Frontend and backend implementation : Milo Brontesi, Elia Maggioni, Lucas
Manini

## Short documentation

### Brief description of the project explaining the chosen theme

We selected a venture capitalist with a specific focus on disruptive technology
due to their ability to identify and support groundbreaking innovations that
have the potential to reshape entire industries.

### Hosting service used and why

The hosting service we’ve chosen to use is Vercel, as it offers numerous advantages.

- Its seamless deployment process integrates with Git, ensuring
  effortless updates to your site.
- Vercel's global CDN ensures fast-loading websites from any loca-
  tion.
- It allows us to have server-side rendering in combination with
  Nuxt.js, creating a high-performance and SEO-friendly Vue.js
  application.
- Its developer-friendly environment provides features like hot
  reloading and instant previews, while the integration ecosystem
  simplifies connecting to external services.
  Overall, Vercel is a powerful and user-friendly platform that fulfils the needs of
  developers and visitors.

### Rendering mode used and why

We’ve selected to use Static Site Generation for our website deployment.

Advantages:

1. **Performance:** Static sites are often faster than dynamic sites because
   they don’t need to make any database queries or server-side processing to
   serve the content.
2. **Scalability:** Since every page is pre-built and does not rely on a server to
   dynamically generate it, static websites can handle heavy loads with ease.
3. **Security:** Static sites are less vulnerable to attacks because there are
   fewer attack vectors compared to dynamic websites. There’s no database
   or server-side code that can be exploited.
4. **Deployment and Hosting:** Hosting static sites is often cheaper and
   simpler because you can host them on any web server or CDN. Services
   like Netlify, Vercel, and GitHub Pages make deploying static websites a
   breeze.

5. **SEO Friendly:** With pre-rendered HTML files, it’s easier for search
   engines to index your site, which can lead to better SEO performance.
6. **Development Workflow:** Nuxt.js provides an excellent developer ex-
   perience with features like hot module replacement, async data loading,
   automatic routing, and more.

Disadvantages:

1. **Dynamic Data:** If your website needs to display data that changes in
   real-time, static site generation might not be the best fit. Though you can
   use APIs and JavaScript to update the data on the client-side, this can
   add complexity.
2. **Regeneration Time:** If your site has thousands of pages, the build process
   might take a while. This is becausenuxt generatehas to pre-render each
   page during the build process.
3. **Complex Interactions:** While you can handle some dynamic functions
   with APIs and client-side JavaScript, very complex interactions that rely
   heavily on server-side processing may not be feasible.
4. **Server-Side Logic:** Static sites limit your ability to perform server-side
   functions, like user authentication, form submission, etc. You might need
   to rely on third-party services or serverless functions to achieve this, adding
   extra complexity.
5. **Limited CMS Integrations:** If you want to use a Content Management
   System (CMS) with your static Nuxt.js site, you’ll be limited to headless
   CMS options, which could require more configuration.
   Our decision to generate a static website for our venture capital firm using
   Nuxt.js was underpinned by several key considerations. Given the nature
   of our content, which evolves at a relatively slow pace, and the limited
   requirements for intricate client-server interactions, we opted for a strategy
   that emphasizes security and performance. Static sites, by their inherent
   design, are not only faster due to the absence of on-the-spot database
   queries or server-side processing but also possess robust security attributes.
   Furthermore, they benefit from reduced hosting costs, straightforward
   scalability, and enhanced Search Engine Optimization (SEO) capabilities.
   For the sole interactive segment of our website - the contact form - we chose
   to utilize a serverless function. This function is designed to write data to
   our Supabase instance. However, it’s important to note that this particular
   feature has not been deployed, as it fell outside the project’s current scope.
   While Incremental Static Regeneration (ISR) could have presented an alternative
   deployment option, we consciously decided against it. The complexity it adds,
   coupled with our website’s infrequent content changes, led us to favor a simpler
   solution. Instead, we opted to regenerate the website and re-query the database

on a daily basis, ensuring our site’s content stays updated without unnecessary
complexity.

### Structure of the project

**Structure of links/pages folder with short description**

Our website was implemented with the following page structure:

pages/

- about.vue
- areas/
  _⋆_ [id].vue
  _⋆_ index.vue
- contact.vue
- index.vue
- people/
  _⋆_ [id].vue
  _⋆_ index.vue
- projects/
  _⋆_ [id].vue
  _⋆_ index.vue
- top-projects.vue

**about.vue** : the page containing general information regarding the venture
capital firm.

**areas/[id].vue** : the layout page describing a single area of investment which is
of interest for the venture capital, describing why it’s interesting for them and
linking to the projects that belong in such area.

**areas/index.vue** : this page lists all areas of interest for the firm, linking to
each area’s individual page and also linking to the ‘All Projects’.

**contact.vue** : the page containing contact information and form.

**index.vue** : the homepage containing the main venture capital’s main informa-
tion and links to main pages.

**people/[id].vue** : the layout page for a single team member in the firm, con-
taining basic information about such person and the projects he/she supervises.
people/index.vue : the page showing all team members, divided by their role
in the firm.
**projects/[id].vue** : the layout page for a single project the firm has invested
in, showing information related to the project, the area(s) to which is belongs
and its supervisor.
**projects/index.vue** : the page containing all the projects the firm has invested
in, organised by area.
**top-projects.vue** : the page containing the firm’s most influential and bleeding-
edge projects.

```
Available server endpoints with short description
```

```
GET /api/projects/top
This endpoint returns the details of the top project in the system. It connects
to the database and fetches the projects marked as ‘top_project‘.
Response:
```

- An object representing the top projects, or
- HTTP 400 along with an error message in case of a problem

```
GET /api/projects/[id]
This endpoint retrieves the details of a specific project with a given id. The
project's id is passed as a URL parameter.
Response:
```

- An object representing the project, including supervisor and sections information,
  or
- HTTP 400 along with an error message in case of a problem

```
GET /api/projects
This endpoint retrieves all projects from the database.
Response:
```

- An array of objects, each representing a project, or

- HTTP 400 along with an error message in case of a problem

```
GET /api/projects/[id]/areas/
This endpoint retrieves the areas related to a specific project. The project's code
is extracted from the id parameter passed in the URL.
Response:
```

- An object representing the area, or
- HTTP 400 along with an error message in case of a problem

```
GET /api/areas/[id]
This endpoint retrieves the details of a specific area given its id. The area's id is
passed as a URL parameter.
Response:
```

- A object representing the area, including project details related to that area, or
- HTTP 400 along with an error message in case of a problem

```
GET /api/areas
This endpoint retrieves all areas from the system.
Response:
```

- An array of objects, each representing an area with included project details, or
- HTTP 400 along with an error message in case of a problem

```
GET /api/people/[id]
This endpoint retrieves the details of a specific team member given their id. The
member's id is passed as a URL parameter.
Response:
```

- An object representing the team member, including related project details, or
- HTTP 400 along with an error message in case of a problem

```
GET /api/people
This endpoint retrieves all team members from the system.
Response:
```

- An array of objects, each representing a team member, or
- HTTP 400 along with an error message in case of a problem

The documentation for the endpoints could be expanded further by including in-
formation about the structure of the response data, authentication requirements,
any possible query parameters, etc.

### List of components implemented with description, props

```
Component name: FilledButton.vue
Description : navigation button component used throughout the website.
Props :
```

1. **link** : This prop represents the link or route that the button
   should navigate to when clicked. It is used as the value for the
   "to" prop of the NuxtLink component.
2. **classes** : This prop allows the parent component to pass addi-
   tional CSS classes to the button component. It is used as a
   binding for the :class attribute of the <button> element. Any
   classes passed through this prop will be added to the existing
   classes defined in the template.

```
Component name: Footer.vue
Description : Responsive website footer always on the bottom of the page.
Props : none Component name: Navbar.vue
```

```
Description : The responsive navigation bar of the site.
Props : none
```

```
Component name: FullsizeImage.vue
Description : Responsive image container.
Props :
```

1. **img** : This prop represents an image object that contains infor-
   mation about the image to be displayed. It is of type ImageInfo,
   which is a custom type defined in the "~/utils/Image" module.
   The prop is marked as required, it must be provided by the
   parent component. The img object contains the properties: src
   (the image source URL) and alt.
2. **big** : This prop indicates whether the image should be displayed
   in a larger size. It is a Boolean prop and is not required. If the
   prop is not provided, it defaults to false. When big is true, the

```
component applies different CSS classes to the containing <div>
element, resulting in a larger height for the image.
```

**Component name:** GridContainer.vue

**Description** : Responsive container component that displays the passed content
in grid of ImageGridItem components.

**Props** :

1. **content** : This prop represents an array of ContentItem objects.
   It is marked as required, so it must be provided by the parent
   component. Each ContentItem contains the properties: but-
   tontext, buttonlink, maintext, maindesc, rendermaindesc, and
   image. The content prop allows the parent component to pass
   an array of content items to be displayed in the component.

**Component name:** StandardSlotted.vue

**Description** : Responsive component used throughout the website that has two
slots to display content.

**Props** :

1. **separator** : This prop indicates whether a separator should be
   displayed below the content. It is a Boolean prop and is not
   required. If the prop is not provided, it defaults to false. When
   separator is true it applies a bottom border of 2 pixels.
2. **horizontal** : This prop determines the orientation of the slots. It
   is a Boolean prop and is not required. If the prop is not provided,
   it defaults to false.

**Component name:** ImageGridItem.vue

**Description** : Responsive component to display content cards with an image,
some text and a button.

**Props** :

1. **buttontext** : This prop represents the text to be displayed on
   the button. It is a required prop of type String. The parent
   component must provide a value for this prop.
2. **buttonlink** : This prop represents the link or route that the
   button should navigate to when clicked. It is a required prop
   of type String. The parent component must provide a value for
   this prop.

3. **maintext** : This prop represents the main text content to be
   displayed. It is a required prop of type String. The parent
   component must provide a value for this prop.
4. **maindesc** : This prop represents the main description or addi-
   tional text content to be displayed. It is a required prop of type
   String. The parent component must provide a value for this
   prop.
5. **image** : This prop represents an image object that contains
   information about the image to be displayed. It is an optional
   prop of type ImageInfo. If not provided by the parent component,
   it defaults to an object with src and alt properties.

**Component name:** InputField.vue

**Description** : A responsive and personalised input field for the "Contact Us"
page.

**Props** :

1. **type** : This prop represents the type of the input element. It is
   a string prop and is not required. If the prop is not provided,
   it defaults to "text". The type prop determines the input type,
   such as "text", "password", "email", etc.
2. **value** : This prop represents the value of the input element. It is
   a string prop and is not required. If the prop is not provided, it
   defaults to an empty string (""). The value prop sets the initial
   value of the input.
3. **classes** : This prop allows the parent component to pass addi-
   tional CSS classes to the input element. It is a string prop and
   is not required. If the prop is not provided, it defaults to an
   empty string (""). The classes prop allows for customization and
   adding specific styling to the input component.

**Component name:** TextField.vue

**Description** : responsive and personalised text field for the "Contact Us" page.

**Props** :

1. **value** : This prop represents the value of the textarea element. It
   is a string prop and is not required. If the prop is not provided,
   it defaults to an empty string (""). The value prop sets the initial
   value of the textarea.

2. **classes** : This prop allows the parent component to pass addi-
   tional CSS classes to the textarea element. It is a string prop
   and is not required. If the prop is not provided, it defaults to an
   empty string (""). The classes prop allows for customization and
   adding specific styling to the textarea component.

**Component name:** PageHeader.vue

**Description** : The responsive page header component seen in many pages It
displays any content above a given image using a <slot> tag.

**Props** :

1. **image** : This prop represents an object that contains information
   about the image to be displayed below the slot. It is a required
   prop of type ImageInfo.

**Component name:** TitleTextItem.vue

**Description** : A responsive component used throughout the website that displays
a Title with a subtext and an optional button.

**Props** :

1. **title** : This prop represents the title of the component. It is
   a required prop of type String. The parent component must
   provide a value for this prop.
2. **text** : This prop represents the main text content of the compo-
   nent. It is a required prop of type String. The parent component
   must provide a value for this prop.
3. **buttonText** : This prop represents the text to be displayed on
   the button. It is an optional prop of type String. If provided, a
   button will be rendered with this text.
4. **buttonUrl** : This prop represents the link or route that the
   button should navigate to when clicked. It is an optional prop of
   type String. If provided, the button will have a link associated
   with it.
5. **centered** : This prop determines whether the component content
   should be centered vertically and horizontally. It is a Boolean
   prop and is not required. If the prop is not provided, it defaults
   to false.
6. **divCentered** : This prop determines whether the component
   container (<div>) should be centered vertically and horizontally.
   It is a Boolean prop and is not required. If the prop is not
   provided, it defaults to false.

7. **width** : This prop represents the width of the component con-
   tainer (<div>). It is an optional prop of type String. If provided,
   it sets the width of the container.
8. **additionalTextClasses** : This prop allows the parent compo-
   nent to pass additional CSS classes to the text element. It is an
   optional prop of type String.
9. **additionalTitleClasses** : This prop allows the parent compo-
   nent to pass additional CSS classes to the title element. It is
   an optional prop of type String. If not provided, it defaults to
   "text-primary".
10. **topMargin** : This prop determines whether the component
    should have top margin or not. It is a Boolean prop and is not
    required. If the prop is not provided, it defaults to true.
11. **paddingBetweenText** : This prop determines whether there
    should be padding between the title and the text. It is a Boolean
    prop and is not required. If the prop is not provided, it defaults
    to true

### List of extra modules imported in the project and how they

### were used

**Prettier** Prettier is an opinionated code formatter and linter we’ve used to
keep the code in a consistent format.

**Tailwindcss** A CSS framework packed with classes that can be composed to
build any design. We’ve used its classes throughout all of the codebase to ease
the styling process.

**Typescript** A superset of Javascript which adds syntax for static types, al-
lowing us to have strict type checks and catch errors when compiling our TS
code into JS.
