export const api = "http://localhost:5000/boomify-d9a70/us-central1/api";

export const Business = "BUSINESS";
export const Influencer = "INFLUENCER";

export const States = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Minor Outlying Islands",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "U.S. Virgin Islands",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const Industry = ["IT", "Cafe", "Restaruant", "Fashion"]; // Need to add more industries

export const ContentCategory = ["Vlogs", "Lifestyle", "Fitness", "Comedy"]; // Need to add more content categories

export const PreferredPlatform = ["Instagram", "Tiktok"]; // Add more platforms later

export const nameRegex = /^[a-zA-Z]+$/;

export const phoneRegex = /^\d{10}$/;

export const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

export const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

export const instagramRegex = /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/;

export const tiktokRegex = /^[0-9A-Za-z_.]{3,24}$/;

export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const passwordRegex =
  /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
