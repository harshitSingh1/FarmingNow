website link: https://farming-now.vercel.app/

![FarmingNow](https://github.com/user-attachments/assets/08c9819c-32d8-4652-9769-f6687f835462)


# FarmingNow

**Project Name:** FarmingNow  
**Objective:** To provide a comprehensive and user-friendly platform that leverages NASA's open-source data to help farmers optimize their agricultural practices.

## Website Layout

### 1. Home Page
- **Header:** Logo, navigation menu (Home, Crop Recommendations, Government Schemes, About us, blogs, Contact us), and search bar.
- **Hero Section:** Large banner image with a brief description of the platform and its purpose. Include a "Get Started" button.
- **Main Features Overview:** Quick links or icons to the main features (e.g., Crop Recommendations, Government Schemes).
- **ChatBot:** A floating chatbot that assists farmers with agriculture-related questions.

### 2. Crop Recommendations Page
- **Sidebar Filter:** Filters for season, crop type, and location.
- **Main Content Area:** Grid of crops with names and brief descriptions. Get detailed information about the crops.
- **Search Bar:** Search for specific crops directly.

### 3. Government Schemes Page
- **Search and Filter Options:** Search bar and filters for scheme type, eligibility criteria, and application status.
- **Scheme Cards:** Each scheme displayed as a card with a brief description and click on them to know more.

### 4. Pest Control Page
- **Pest List:** Provides a database of common pests, alerts for regional outbreaks, and preventive measures.
- **Alert Signup:** Signup for pest alerts specific to user crops.

### 5. Weather Forecast & Alerts Page
- **Weather Widget:** Real-time data and a weekly forecast at the top.
- **Alert Section:** Active alerts or warnings.

### 6. Fertilizer Recommendation Page
- **Function:** Provides personalized fertilizer suggestions based on soil type, crop, and nutrient levels (Nitrogen, Phosphorus).
- **Fertilizer recommend:** NASA API fetches climate data like temperature, humidity, and moisture to determine the best fertilizers.

### 7. Soil Health Monitoring Page
- **Soil Input Form:** Allows users to input soil test data for personalized fertilizer recommendations and alerts for soil degradation.
- **Results Section:** Suggests irrigation needs based on soil moisture, precipitation, and temperature data.
- **Educational Content:** Uses reverse geocoding and Mapbox API to show accurate land location (satellite view).

### 8. ChatBot
- **Function:** A floating chatbot that assists farmers with agriculture-related questions.
- **Featured Content:** Powered by the Google Gemini API, the chatbot generates real-time responses to user questions.
- **Search Functionality:** Offers instant support and guidance to farmers anytime.

## Design Considerations
- **User-Centric Design:** Ensure an intuitive and accessible UI, especially for users who may not be tech-savvy.
- **Mobile Responsiveness:** Fully responsive design for a seamless experience on both desktop and mobile devices.
- **Color Scheme:** Reflect the agricultural theme with earthy tones like green, brown, and yellow.
- **Icons and Imagery:** Use relevant icons and images for easy understanding and visual appeal.

## Installation

To run this project locally:

```bash
git clone https://github.com/YourUsername/FarmingNow.git
cd FarmingNow
npm install
npm start
```
## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for review.
