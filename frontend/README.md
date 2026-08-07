# Water Guard AI

Build a modern, responsive, professional AI-powered website called "Water Quality AI".

The website is for a final year machine learning project that predicts whether water is safe for drinking using a trained Random Forest machine learning model.

The website should have a clean, premium, modern design with a blue and white color scheme inspired by water, health, and artificial intelligence.

Use smooth animations, rounded cards, soft shadows, glassmorphism where appropriate, gradient backgrounds, modern typography, and a fully responsive layout for desktop, tablet, and mobile.

Use React with reusable components.

The website should contain exactly five pages.

---------------------------------------

PAGE 1 — HOME

Hero section with beautiful water-themed background.

Title:

AI-Powered Water Quality Prediction

Subtitle:

Predict whether water is safe for drinking using Machine Learning and internationally recognized water quality parameters.

Buttons:

Predict Water Quality

Learn More

On the right side place a modern illustration of clean drinking water, water drops, or laboratory testing.

Below the hero create three feature cards.

Feature 1

Fast Prediction

Instant prediction using a trained Random Forest model.

Feature 2

WHO-Based Parameters

Prediction is based on important physicochemical water quality indicators.

Feature 3

Machine Learning Powered

Uses supervised machine learning for intelligent water safety assessment.

Below that create another section called

Why Water Quality Matters

Include a modern illustration and explain how safe drinking water protects human health and why water quality monitoring is important.

---------------------------------------

PAGE 2 — ABOUT THE PROJECT

Create a professional project page.

Sections:

Project Overview

Objectives

Problem Statement

Importance of Water Quality Prediction

Expected Benefits

Use attractive icons and information cards.

Mention that this project helps users quickly assess water potability using machine learning.

---------------------------------------

PAGE 3 — ABOUT THE MODEL

Create a page explaining the machine learning model.

Include sections:

Dataset

Preprocessing

Machine Learning Algorithm

Prediction Pipeline

Model Deployment

Create a beautiful horizontal workflow diagram:

Dataset

↓

Data Preprocessing

↓

Random Forest Model

↓

Prediction

↓

Water Potability Result

Also create cards explaining:

Random Forest

Feature Engineering

Prediction Process

Model Performance

Leave placeholders for

Accuracy

Precision

Recall

F1 Score

ROC AUC

These will be updated later.

---------------------------------------

PAGE 4 — WATER QUALITY PREDICTION

This is the main page.

Create a beautiful prediction interface.

On the left side create input fields for

pH

Hardness

Total Dissolved Solids

Chloramines

Sulfate

Conductivity

Organic Carbon

Trihalomethanes

Turbidity

Each field should include a short helper description.

On the right side create a large prediction card.

Initially display

Waiting for Prediction

After prediction show either

Safe for Drinking

or

Not Safe for Drinking

Use green for safe and red for unsafe.

Also create a section showing

Analysis

pH Status

Turbidity Status

WHO Recommendation

Overall Water Quality

Include a Predict button.

For now use dummy data.

Backend API will be connected later.

---------------------------------------

PAGE 5 — WHO GUIDELINES

Create a beautiful page with a modern table.

Columns:

Parameter

Recommended Value

Description

Include:

pH

Hardness

TDS

Chloramines

Sulfate

Conductivity

Organic Carbon

Trihalomethanes

Turbidity

Include an information box:

These guideline values are based on internationally recognized drinking water recommendations and should be used only for educational purposes.

---------------------------------------

HEADER

Sticky navigation bar.

Logo:

💧 Water Quality AI

Menu

Home

About Project

About Model

Prediction

WHO Guidelines

Modern active navigation indicator.

---------------------------------------

FOOTER

Professional footer.

Developer Information

Developed by:

Minhajul Islam

Department of Computer Science and Engineering

Daffodil International University

Email placeholder

GitHub placeholder

LinkedIn placeholder

Copyright 2026

---------------------------------------

DESIGN STYLE

Premium

Modern

Clean

Professional

Blue gradient

White cards

Rounded corners

Water illustrations

Smooth transitions

Animated buttons

Hover effects

Responsive

Professional icons

No dark mode

Do not use Gradio components.

Design everything as a modern web application ready to connect with a FastAPI backend later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b23e0026-e47d-4246-9f63-f1e2ed3d31fc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
