import * as fs from 'fs';
import * as path from 'path';
import * as Twit from 'twit'; // Using Twit package for Twitter API
import { AutonomousAI } from 'ai16z'; // Assuming ai16z provides TypeScript support

// Twitter API credentials
const CONSUMER_KEY = "your_consumer_key";
const CONSUMER_SECRET = "your_consumer_secret";
const ACCESS_TOKEN = "your_access_token";
const ACCESS_SECRET = "your_access_secret";

// Authenticate with Twitter API using Twit
const T = new Twit({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token: ACCESS_TOKEN,
  access_token_secret: ACCESS_SECRET,
});

// Initialize AI Agent
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
      // Prepare caption
      const caption = `${prompt}\n\nby @SolNovaAI`;

      // Read image file and prepare for upload
      const b64content = fs.readFileSync(imagePath, { encoding: 'base64' });

      // Upload media to Twitter
      T.post('media/upload', { media_data: b64content }, (err, data) => {
        if (err) {
          console.error("Media upload failed:", err);
          return;
        }

        // Now we can reference the media and post a tweet (media will attach to the tweet)
        const mediaIdStr = data.media_id_string;
        const params = { status: caption, media_ids: [mediaIdStr] };

        T.post('statuses/update', params, (err) => {
          if (!err) {
            console.log("Successfully posted on X!");
            // Clean up local image file
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
