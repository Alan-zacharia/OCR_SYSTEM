# Aadhaar Ocr System

## Overview
This is an Aadhaar OCR (Optical Character Recognition) system built with a Node.js backend and a React frontend. It enables users to scan and extract information from Aadhaar cards.

## Features
- **OCR Functionality**: Extract text from Aadhaar card images.
- **Data Visualization**:  Visual representation of the extracted information.

## Technologies Used
- **Backend**: Node.js, Express
- **Frontend**: React.js
- **Data Recognition**: Tesseract
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Alan-zacharia/OCR_SYSTEM.git
   ```

2. Navigate to the project directory:
   ```bash
   cd aadhar-ocr
   ```

#### Set up the backend:
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB URI:
   ```
   PORT=""
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

#### Set up the frontend:
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Live Demo
- https://ocr-system.vercel.app/
