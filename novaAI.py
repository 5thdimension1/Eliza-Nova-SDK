import tweepy
import os
import random
from ai16z import AutonomousAI  

# Twitter API credentials
CONSUMER_KEY = "your_consumer_key"
CONSUMER_SECRET = "your_consumer_secret"
ACCESS_TOKEN = "your_access_token"
ACCESS_SECRET = "your_access_secret"

# Authenticate with Twitter API
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)
api = tweepy.API(auth)

# Initialize AI Agent
concept = {
    "name": "Nova Limitless AI",
    "description": "An autonomous AI inspired by Nova Limitless, exploring cosmic themes and celestial wonders."
}
ai_agent = AutonomousAI(name=concept["name"], description=concept["description"])

# Components for dynamic prompt generation
adjectives = ["celestial", "cosmic", "ethereal", "luminous", "stellar"]
locations = ["nebula", "galaxy", "starfield", "supernova", "black hole"]
details = [
    "illuminated by distant stars",
    "enveloped in cosmic dust",
    "sparkling with stardust",
    "radiating with astral light",
    "swirling in the vast cosmos"
]

# Function to generate dynamic prompts
def generate_prompt():
    adjective = random.choice(adjectives)
    location = random.choice(locations)
    detail = random.choice(details)
    return f"A {adjective} {location} {detail}."

# Generate a Nova Limitless-like image and post
def generate_and_post():
    prompt = generate_prompt()  # Generate a random dynamic prompt
    
    try:
        # Generate an image with the AI agent
        result = ai_agent.generate_image(prompt=prompt, style=" cosmic celestial being 8k ")
        image_path = result.get("image_path") 
        
        if image_path:
            # Prepare caption
            caption = f"{prompt}\n\nby @SolNovaAI"
            
            # Post to X (Twitter)
            api.update_status_with_media(status=caption, filename=image_path)
            print("Successfully posted on X!")
            
            # Clean up local image file
            os.remove(image_path)
        else:
            print("Image generation failed: No image path returned.")
    except Exception as e:
        print(f"Error generating and posting: {e}")

if __name__ == "__main__":
    generate_and_post()
