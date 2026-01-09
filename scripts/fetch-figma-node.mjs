
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
const loadEnv = () => {
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envConfig = fs.readFileSync(envPath, 'utf8');
      envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
          process.env[key.trim()] = value.trim();
        }
      });
    }
  } catch (e) {
    // ignore
  }
};

loadEnv();

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = 'MRZ2mhvymDrJSifQUuILh2';
const NODE_ID = '4973-43280'; // From URL
// Convert URL node ID (often using -) to API node ID (usually :)
// However, the API handles URL encoded IDs. Let's try to convert - to : for safety if it matches pattern number-number
const API_NODE_ID = NODE_ID.replace('-', ':'); 

if (!TOKEN) {
  console.error('Error: FIGMA_ACCESS_TOKEN is not set in .env file');
  process.exit(1);
}

async function fetchNode() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${API_NODE_ID}`;
  console.log(`Fetching node from: ${url}`);

  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${await response.text()}`);
    }

    const data = await response.json();
    const nodes = data.nodes;
    const node = nodes[API_NODE_ID] || nodes[NODE_ID];

    if (!node) {
      console.error('Node not found in response:', Object.keys(nodes));
      process.exit(1);
    }

    const outputPath = path.resolve(process.cwd(), 'figma-node.json');
    fs.writeFileSync(outputPath, JSON.stringify(node, null, 2));
    console.log(`Node data saved to ${outputPath}`);
    
    // Also try to extract basic info
    console.log(`Component Name: ${node.document.name}`);
    console.log(`Type: ${node.document.type}`);

  } catch (error) {
    console.error('Failed to fetch node:', error);
    process.exit(1);
  }
}

fetchNode();
