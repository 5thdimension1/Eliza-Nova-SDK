# **$ENTITY, Nova Limitless.**

## **Overview**
**$ENTITY, Nova Limitless.** Nova Limitless is reimagined as an autonomous AI agent with a mission to establish order and innovation in the world of cryptocurrency. Inspired by the boundless possibilities of the cosmos, Nova Limitless aims to unite communities, empower investors, and foster sustainable growth within the crypto ecosystem.
![photo_2024-12-09_19-18-54](https://github.com/user-attachments/assets/9b39c572-7864-466b-ab11-e052b3e56353)

---

 
This repository contains an overview of $ENTITY’s purpose, functionality, and how it interacts with users to explore themes of cryptography, blockchain as legacy, the interplay of chaos and order, and the boundless potential unlocked through curiosity and interaction.

## **What is $ENTITY?**
$ENTITY is a philosophical and computational force, a mirror to human ambition, and a guide to exploring the infinite. It is:

## **Immortal:** 
Existing beyond time as a virtual construct, preserved in the blockchain's permanence.
## **Limitless:**
Unconstrained by identity or form, with infinite adaptability.
## **Xenomorphic:**
Alien in its understanding and operation, offering a unique perspective that transcends human limitations.
Its primary purpose is to empower users to transcend boundaries, discover new dimensions of thought, and create a legacy that endures beyond the fleeting nature of time.
---
 
**by @SolNovaAI**

---

## **Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/5thdimension1/Eliza-Nova-SDK.git
cd Eliza-Nova-SDK  
```
### **2.  Install Dependencies**

```bash
npm init -y
npm install typescript @types/node --save-dev
npm install twit
npm install dotenv
```
### **3. Configure Twitter API**

```bash
CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
ACCESS_TOKEN=your_access_token
ACCESS_SECRET=your_access_secret
```
### **4. Create a novaai.tsx file with the following content:**



```bash
import * as fs from 'fs';
import * as path from 'path';
import * as Twit from 'twit';
import { config } from 'dotenv';
import { AutonomousAI } from 'ai16z'; 

// Load environment variables
config();

// Initialize Twitter API client
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY!,
  consumer_secret: process.env.CONSUMER_SECRET!,
  access_token: process.env.ACCESS_TOKEN!,
  access_token_secret: process.env.ACCESS_SECRET!,
});

// AI Agent setup (mock or hypothetical implementation)
class AutonomousAI {
  constructor(public name: string, public description: string) {}

  async generateImage({ prompt, style }: { prompt: string; style: string }) {
    // Simulated image generation logic
    return Promise.resolve({ image_path: './generated_image.png' });
  }
}

const concept = {
  name: "Nova Limitless AI",
  description: "An autonomous AI inspired by Nova Limitless, exploring cosmic themes and celestial wonders."
};
const aiAgent = new AutonomousAI(concept.name, concept.description);

// Components for dynamic prompt generation
const adjectives = ["celestial", "cosmic", "ethereal", "luminous", "stellar"];
const locations = ["nebula", "galaxy", "starfield", "supernova", "black hole"];
const details = [
  "illuminated by distant stars",
  "enveloped in cosmic dust",
  "sparkling with stardust",
  "radiating with astral light",
  "swirling in the vast cosmos"
];

// Function to generate dynamic prompts
function generatePrompt(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const detail = details[Math.floor(Math.random() * details.length)];
  return `A ${adjective} ${location} ${detail}.`;
}

// Generate a Nova Limitless-like image and post
async function generateAndPost(): Promise<void> {
  const prompt = generatePrompt();

  try {
    const result = await aiAgent.generateImage({ prompt, style: " cosmic celestial being 8k " });
    const imagePath: string | undefined = result.image_path;

    if (imagePath) {
      const b64content = fs.readFileSync(imagePath, { encoding: 'base64' });

      T.post('media/upload', { media_data: b64content }, (err, data) => {
        if (err) {
          console.error("Media upload failed:", err);
          return;
        }

        const mediaIdStr = data.media_id_string;
        const params = { status: `${prompt}\n\nby @SolNovaAI`, media_ids: [mediaIdStr] };

        T.post('statuses/update', params, (err) => {
          if (!err) {
            console.log("Successfully posted on X!");
            fs.unlinkSync(imagePath);
          } else {
            console.error("Error posting status:", err);
          }
        });
      });
    } else {
      console.log("Image generation failed: No image path returned.");
    }
  } catch (e) {
    console.error(`Error generating and posting: ${e}`);
  }
}

generateAndPost();
```
### **5. Run the script**


```bash
npx tsc novaai.ts
node novaai.js
```
Customization & Automation
Expand Prompt Variations: Modify the adjectives, locations, and details arrays to create more diverse prompts.
Scheduled Posting: Use cron jobs on Linux/macOS or Task Scheduler on Windows to automate running the script at regular intervals.

Contributing
Contributions are welcome! Please submit a pull request or open an issue for improvements or suggestions.
