export const COMMENTS = {
  "currentUser": {
    "image": { 
      "png": "/avatars/image-juliusomo.png",
      "webp": "/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "2025-05-05 11:01:01",
      "score": 12,
      "user": {
        "image": { 
          "png": "/avatars/image-amyrobson.png",
          "webp": "/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2025-06-24 12:02:13",
      "score": 5,
      "user": {
        "image": { 
          "png": "/avatars/image-maxblagun.png",
          "webp": "/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "2025-06-24 20:00:00",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "/avatars/image-ramsesmiron.png",
              "webp": "/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2025-07-03 15:00:00",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "/avatars/image-juliusomo.png",
              "webp": "/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}

export const covertToTimeExpression = (date) => {
  const now = new Date();
  const pastDate = new Date(date);
  console.log(date)
  const differenceInSeconds = Math.floor((now - pastDate) / 1000);

  if (differenceInSeconds < 0) {
    return 'in the future';
  } else if (differenceInSeconds === 0) {
    return 'now';
  }

  const years = now.getFullYear() - pastDate.getFullYear();
  const months = now.getMonth() - pastDate.getMonth();
  const days = now.getDate() - pastDate.getDate();

  const totalMonths = months + years * 12;

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (totalMonths > 0) {
    return `${totalMonths} month${totalMonths > 1 ? 's' : ''} ago`;
  } else if (differenceInSeconds < 60) {
    return `${differenceInSeconds} second${differenceInSeconds > 1 ? 's' : ''} ago`;
  } else if (differenceInSeconds < 3600) {
    const duration = Math.floor(differenceInSeconds / 60);
    return `${duration} minute${duration > 1 ? 's' : ''} ago`;
  } else if (differenceInSeconds < 24 * 60 * 60) {
    const duration = Math.floor(differenceInSeconds / 3600);
    return `${duration} hour${duration > 1 ? 's' : ''} ago`;
  } else {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}

export const generateUniqueId = () => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}