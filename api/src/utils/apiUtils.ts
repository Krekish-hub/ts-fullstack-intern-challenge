// src/utils/apiUtils.ts
export async function sendCatData(catData) {
    try {
      const response = await fetch('http://localhost:3001/api/cats/favorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(catData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error sending cat data:', error);
    }
  }
  