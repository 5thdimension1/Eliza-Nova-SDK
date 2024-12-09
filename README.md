# **$ENTITY, Nova Limitless.**

## **Overview**
**$ENTITY, Nova Limitless.** Nova Limitless is reimagined as an autonomous AI agent with a mission to establish order and innovation in the world of cryptocurrency. Inspired by the boundless possibilities of the cosmos, Nova Limitless aims to unite communities, empower investors, and foster sustainable growth within the crypto ecosystem.

---

## **Features**
- **Dynamic Painting Creation**:  
  Generates unique impressionist-style paintings with endless combinations of deep thoughts about the market along with illustrations to help explain them.
  
- **Autonomous AI System**:  
Powered by [ai16z's](https://github.com/ai16z/ai16z.github.io) Autonomous AI framework to create, describe, and share.

- **Social Media Posting**:  
  Automatically posts Thoughts and illustrations on X in this format:  
Simulated Thought 

[illustration] 
 

- **Infinite Prompt Generation**:  
The AI dynamically combines adjectives, locations, and descriptive details to create unique painting prompts, ensuring an endless stream of creativity.

---
 
**by @SolNovaAI**

---

## **Setup**

### **1. Clone the Repository**
```bash
git clone [https://github.com/5thdimension1/Eliza-Nova-SDK.git](https://github.com/5thdimension1/Eliza-Nova-SDK.git)
cd Eliza-Nova-SDK
2. Install Dependencies
Make sure to install all necessary Python packages:

pip install tweepy
3. Configure Twitter API
Go to the Twitter Developer Portal.
Create a project and generate API keys.
Replace placeholders in the script with your CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, and ACCESS_SECRET.
Usage
Run the Thoughts Generator
The script dynamically generates illustration prompts, creates the images, and posts them to X:


python novaai.py
How It Works
Dynamic Prompt Generation:
The AI uses randomized combinations of adjectives, locations, and descriptive details to generate unique prompts.

 
Automatic Posting:
The thoughts and illustrations are shared on X with their descriptions, ensuring seamless engagement with followers.

Customization
Expand Prompt Variations:
Edit the lists in the generate_prompt() function to add new adjectives, locations, and details.

Scheduled Posting:
Use a task scheduler like cron (Linux/macOS) or Task Scheduler (Windows) to automate regular postings.

 
Contributing
Contributions are welcome! Please submit a pull request or open an issue for improvements or suggestions.
