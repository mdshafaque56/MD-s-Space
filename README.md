<div align="center">

# Solomon's Space

### Explore the AI multiverse.

A polished, interactive knowledge platform that turns machine learning, probability, and modern AI into visual, intuitive, and practical learning experiences.

[![Built with HTML](https://img.shields.io/badge/HTML5-semantic-E34F26?logo=html5&logoColor=white)](#technology-stack)
[![Styled with CSS](https://img.shields.io/badge/CSS3-responsive-663399?logo=css&logoColor=white)](#technology-stack)
[![Powered by JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=111)](#technology-stack)
[![No Framework](https://img.shields.io/badge/framework-none-7C3AED)](#technology-stack)
[![Open Source](https://img.shields.io/badge/status-open--source-16A34A)](#license)

**AI education · Visual learning · Technical writing · Frontend engineering**

</div>

---

## Overview

**Solomon's Space** is a personal AI knowledge universe created by **MD Shafaque**, an AI/ML builder and writer at **NIT Calicut**. It brings technical writing, visual storytelling, and modern frontend interactions into a focused learning experience for students, practitioners, and curious builders.

The project demonstrates the ability to:

- communicate advanced AI concepts clearly;
- organize an expanding technical-content library;
- design an engaging, responsive user experience;
- implement interactive features using dependency-free JavaScript; and
- ship a lightweight static website that can be deployed almost anywhere.

> The guiding principle: rigorous enough to respect the mathematics, clear enough to remember, and practical enough to apply.

---

## Highlights

- **Dynamic hero experience:** “AI multiverse.” rapidly rewrites itself using eligible blog titles in distinct colors.
- **Focused title rotation:** only blog names containing **one or two words** are included, keeping the hero readable and visually balanced.
- **Personalized greeting:** first-time visitors can enter their name and receive a friendly **“Hi, [Name]!”** greeting.
- **Local-first personalization:** the name is stored in the visitor's browser using `localStorage`; it is not sent to a server by the website.
- **Searchable AI library:** visitors can search articles by title or description.
- **Content-status filters:** switch between all, published, and coming-soon articles.
- **Growing topic catalogue:** covers foundational, applied, generative, and production AI.
- **Book showcase:** presents authored books through an interactive horizontal slider.
- **Animated interface:** scroll reveals, pointer glow, floating visual elements, and smooth transitions.
- **Expandable island navigation:** compact navigation opens on interaction and remains unobtrusive otherwise.
- **Coming-soon experience:** unfinished articles open an accessible modal instead of a broken destination.
- **Responsive layout:** adapts across desktop, tablet, and mobile viewports.
- **Accessibility considerations:** semantic sections, labels, keyboard-friendly modal behavior, visible controls, `aria` attributes, and reduced-motion support for the typing effect.
- **Zero build step:** written in plain HTML, CSS, and JavaScript.

---

## Content Library

### Published articles

- **Transformers:** self-attention, multi-head mechanisms, positional encodings, and scaling laws.
- **CenterNet:** object detection through center points and heatmaps.
- **LoRA:** low-rank adaptation for parameter-efficient model fine-tuning.

### Planned topics

The roadmap includes LangGraph, CNNs, RNNs, LSTMs, RAG, multimodal AI, AI agents, vision transformers, diffusion, graph neural networks, CLIP, prompt engineering, vector databases, quantization, RLHF, federated learning, explainable AI, active learning, MLOps, and more.

### Books

The book section is designed to showcase long-form learning resources, including:

- **Advanced Illustrations in Probability & Statistics**
- **The Geometry of Machine Learning**
- **AI Systems, From First Principles**
- **Agents That Actually Work**

Some content is already available, while other titles and articles are visibly marked as upcoming.

---

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Structure | HTML5 | Semantic page structure and accessible content |
| Styling | CSS3 | Responsive layout, animations, gradients, and visual system |
| Interactivity | Vanilla JavaScript | Search, filters, modal, slider, typing effect, and personalization |
| Typography | Google Fonts | DM Sans and Manrope |
| Persistence | Web Storage API | Stores the visitor's name locally |
| Hosting | Static hosting compatible | GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any web server |

No frontend framework, package manager, database, or build tool is required.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/solomons-space.git
cd solomons-space
```

Replace `<your-username>` with the actual GitHub username after publishing the repository.

### 2. Check the content files

Keep the homepage and all linked article pages in the expected relative paths. A practical structure is:

```text
solomons-space/
├── index.html
├── README.md
├── TransformersUpdated.html
├── centernet-blog.html
├── LoRA Final.html
├── comingsoon.html
├── assets/
│   ├── images/
│   └── covers/
└── LICENSE
```

If the downloaded homepage has a longer filename, rename it to `index.html` before deployment.

### 3. Run locally

Because this is a static site, you can open `index.html` directly in a browser. For more reliable relative links and browser behavior, run a local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Alternative with Node.js:

```bash
npx serve .
```

---

## Using the Website

1. On the first visit, enter your name in the welcome dialog.
2. The site stores the name in the current browser and displays a personalized greeting.
3. Use the navigation island to jump to **AI Blogs**, **Books**, or **About**.
4. Search the blog library by topic or description.
5. Use **All**, **Published**, and **Coming soon** to filter the library.
6. Select a published card to open its article.
7. Select an upcoming topic to view its development-status modal.
8. Browse book cards with the previous and next controls.

To reset the saved greeting during testing, open the browser console and run:

```javascript
localStorage.removeItem('solomonsVisitorName');
location.reload();
```

---

## Managing Content

The blog catalogue is maintained in the `blogs` JavaScript array. Each entry follows this structure:

```javascript
[
  'Article title',
  'Short article description.',
  'article-file.html',
  'live'
]
```

Use:

- `'live'` for a published article;
- `'soon'` for an article that should open the coming-soon modal.

Example:

```javascript
const blogs = [
  [
    'Transformers',
    'Self-attention, multi-head mechanisms, positional encodings, and scaling laws.',
    'TransformersUpdated.html',
    'live'
  ],
  [
    'LangGraph',
    'Graph-based agent execution with state, control flow, and recursion.',
    'comingsoon.html',
    'soon'
  ]
];
```

### Dynamic typing rule

The hero animation automatically excludes titles containing more than two words:

```javascript
blogs.filter(blog => blog[0].trim().split(/\s+/).length <= 2)
```

This means a title such as `Multimodal AI` can appear in the animation, while `Graph Neural Networks` will remain available in the blog library without appearing in the hero rotation.

### Adding a new article

1. Create the new HTML article file.
2. Add its entry to the `blogs` array.
3. Set its status to `'live'`.
4. Confirm that the relative file path and filename capitalization match exactly.
5. Test search, filtering, card navigation, and mobile rendering.

### Adding a book

Add a new book card inside the book slider, including:

- title;
- short description;
- author and edition metadata;
- cover artwork or visual treatment;
- working destination URL; and
- a clear availability state if the book is not yet published.

---

## Personalization and Privacy

The website asks for a visitor's name only to personalize the on-page greeting.

- The value is saved in the browser through `localStorage`.
- The current static implementation does not require an account.
- The current static implementation does not transmit the name to a backend.
- Clearing site data removes the saved value.
- Do not collect sensitive personal information through this field.

If analytics, authentication, forms, or a backend are added later, update this section and provide an appropriate privacy notice before deployment.

---

## Deployment

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select the repository's primary branch and root directory.
5. Save and wait for the deployment URL.

### Netlify or Vercel

1. Import the GitHub repository.
2. Select a static-site deployment.
3. Leave the build command empty.
4. Set the publish directory to the repository root.
5. Deploy.

Before publishing, verify that the main page is named `index.html` and every article, image, and book link uses a valid path.

---

## Quality Checklist

Before each release:

- [ ] Open every published article link.
- [ ] Check filename capitalization on case-sensitive hosting.
- [ ] Test search and all three status filters.
- [ ] Test the visitor-name dialog and saved greeting.
- [ ] Confirm titles with more than two words do not enter the typing rotation.
- [ ] Verify modal close button, backdrop click, and `Escape` key behavior.
- [ ] Test the book slider and external book links.
- [ ] Review mobile layouts at narrow widths.
- [ ] Check keyboard navigation and visible focus states.
- [ ] Check reduced-motion behavior.
- [ ] Optimize images and book covers before committing them.
- [ ] Run an HTML validator and a Lighthouse audit.
- [ ] Confirm the footer year, author details, and copyright statement.

---

## Roadmap

- [ ] Publish the remaining AI topic pages.
- [ ] Give every article a consistent template and reading-progress experience.
- [ ] Add article tags, difficulty levels, and estimated reading time.
- [ ] Add Open Graph and social-preview metadata.
- [ ] Add a sitemap, robots file, canonical URLs, and structured data.
- [ ] Improve asset organization by separating CSS, JavaScript, and media files.
- [ ] Add automated link and HTML validation through GitHub Actions.
- [ ] Add optional theme controls while preserving accessibility.
- [ ] Introduce privacy-conscious analytics only if needed.
- [ ] Add tests for search, filters, local personalization, and modal behavior.

---

## Contributing

Thoughtful contributions are welcome, particularly for:

- factual or mathematical corrections;
- clearer explanations and visual-learning ideas;
- accessibility improvements;
- frontend performance improvements;
- responsive-design fixes; and
- new AI article proposals.

Suggested workflow:

```bash
git checkout -b feature/short-description
git add .
git commit -m "Add: concise description of the change"
git push origin feature/short-description
```

Then open a pull request explaining:

1. what changed;
2. why it improves the project;
3. how it was tested; and
4. screenshots for visual changes, where relevant.

For substantial content or design changes, open an issue first so the direction can be discussed.

---

## Known Limitations

- The project currently uses a static, client-side architecture.
- Some article and book destinations are intentionally marked as coming soon.
- Visitor personalization is browser-specific and does not sync across devices.
- Search currently matches local catalogue titles and descriptions only.
- Content-management updates require editing the source file.

These tradeoffs keep the project simple, fast, portable, and easy to deploy while the content library grows.

---

## License

The website identifies itself as open source, but the repository should contain an explicit `LICENSE` file before public reuse terms are assumed.

A common option is the **MIT License** for the website code. Written articles, illustrations, and books can use separate content terms if required. Clearly document the chosen code and content licenses in the repository.

---

## Author

**MD Shafaque**  
AI/ML builder and technical writer at NIT Calicut

Solomon's Space reflects an interest in making complex ideas visual, memorable, and useful through the intersection of AI engineering, mathematical intuition, technical communication, and product-minded frontend development.

---

## Acknowledgements

- Google Fonts for **DM Sans** and **Manrope**.
- The open-source AI and web-development communities whose research, tools, and educational work make projects like this possible.

---

<div align="center">

**If Solomon's Space helps you understand an idea, consider starring the repository.**

Built with curiosity by **MD Shafaque**.

</div>
