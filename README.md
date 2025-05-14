# Promptopia

Promptopia is an open-source AI prompting tool for the modern world to discover, create, and share creative prompts.

![Promptopia Screenshot](add-image-here)

## Features

- **Discover AI Prompts**: Browse through a collection of AI prompts shared by the community
- **Create and Share**: Create your own AI prompts and share them with the world
- **User Authentication**: Secure login and registration system using NextAuth
- **User Profiles**: Personalized profiles to manage your prompts
- **Search Functionality**: Search for prompts by content, tag, or username
- **Copy to Clipboard**: Easily copy prompts with a single click
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Tag-based Organization**: Organize and find prompts using tags

## Tech Stack

- **Frontend**: 
  - Next.js 14
  - React 18
  - TailwindCSS for styling
  
- **Backend**:
  - Next.js API Routes
  - MongoDB with Mongoose for database
  
- **Authentication**:
  - NextAuth.js for authentication
  
- **Deployment**:
  - Can be deployed on Vercel or any platform supporting Next.js

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB database (local or Atlas)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_URL_INTERNAL=http://localhost:3001
NEXTAUTH_SECRET=your_nextauth_secret

# For OAuth providers (e.g., Google)
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/promptopia.git
   cd promptopia
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3001](http://localhost:3001) in your browser to see the application.

## Usage

### Creating a Prompt

1. Sign in to your account
2. Click on "Create Post" in the navigation bar
3. Fill in the prompt details and tag
4. Click "Create" to publish your prompt

### Browsing Prompts

- The home page displays all prompts from the community
- Use the search bar to find specific prompts by content, tag, or username
- Click on a tag to see related prompts

### Managing Your Prompts

1. Navigate to your profile page
2. View all your created prompts
3. Edit or delete your prompts as needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with Next.js and MongoDB
- Styled with TailwindCSS
- Authentication provided by NextAuth.js