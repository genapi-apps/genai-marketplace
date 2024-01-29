"use client";

import { useAppSelector } from "@/redux/hooks";
import React, { FC, Fragment, useEffect, useState } from "react";
import Card from "../Card";


export interface PromptPageProps {

}


const PromptPage: FC<PromptPageProps> = ({ }) => {
 //const { moduleList } = useAppSelector((state) => state.auth);
   
  

    return (
        <div className="flex   flex-col gap-3">


            <div className="w-full space-y-6">
                <div className="flex gap-5  m-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6   ">
            {moduleList && moduleList!== undefined && moduleList.length>0 ? moduleList.map((item:any, index:any) => (
              <Card key={index} item={item} />
            )):"NO result found"}
          </div>
                </div>

            </div>
        </div>
    );
};

export default PromptPage;


const  moduleList= [
      {
        id: 2,
        name: 'Dark Side Of The Force Characters',
        description: 'You can breed Dark Side of the Force Characters with this Prompt.',
        short_description: 'You can breed Dark Side of the Force Characters with this Prompt.',
        full_description: 'You can breed Dark Side of the Force Characters with this Prompt.',
        logo: '1705992635470-logo7.webp',
        external_link: 'https://example.com/awesome-task-manager',
        support_email: 'support@awesome-task-manager.com',
        website: 'https://www.awesome-task-manager.com',
        visibility_or_status: true,
        created_at: '2024-01-23T06:50:35.488Z',
        updated_at: '2024-01-23T06:50:35.488Z',
        thumbnail: '1705992635471-thumb7.webp',
        images_gallery: '{"1705992635471-g5dark.webp","1705992635474-g5dark1.webp","1705992635474-g5dark2.webp","1705992635475-g5dark3.webp","1705992635475-g5dark4.webp","1705992635476-g5dark5.webp","1705992635476-g5dark6.webp","1705992635476-g5dark7.webp"}',
        model: '',
        token_size: '',
        example_input: '',
        example_output: null,
        timeline: '10:30:00',
        category_module_id: 1,
        user_id: 6,
        type_id: 3,
        price: '0',
        favorite: null,
        category_name: 'Stable Diffusion',
        type_name: 'image',
        imageUrls: [
          {
            type: 'logo',
            url: '/api/market/logo/1705992635470-logo7.webp'
          },
          {
            type: 'images_gallery',
            url: [
              '/api/market/images_gallery/1705992635471-g5dark.webp',
              '/api/market/images_gallery/1705992635474-g5dark1.webp',
              '/api/market/images_gallery/1705992635474-g5dark2.webp',
              '/api/market/images_gallery/1705992635475-g5dark3.webp',
              '/api/market/images_gallery/1705992635475-g5dark4.webp',
              '/api/market/images_gallery/1705992635476-g5dark5.webp',
              '/api/market/images_gallery/1705992635476-g5dark6.webp',
              '/api/market/images_gallery/1705992635476-g5dark7.webp'
            ]
          },
          {
            type: 'thumbnail',
            url: '/api/market/thumbnail/1705992635471-thumb7.webp'
          }
        ]
      },
      {
        id: 3,
        name: 'Magic Avatars',
        description: 'A various range of wizard looking characters.',
        short_description: 'A various range of wizard looking characters.',
        full_description: 'A various range of wizard looking characters.',
        logo: '1705993165240-logo2mid.webp',
        external_link: 'https://example.com/awesome-task-manager',
        support_email: 'support@awesome-task-manager.com',
        website: 'https://www.awesome-task-manager.com',
        visibility_or_status: true,
        created_at: '2024-01-23T06:59:25.252Z',
        updated_at: '2024-01-23T06:59:25.252Z',
        thumbnail: '1705993165241-thumb2m.webp',
        images_gallery: '{"1705993165241-g1.webp","1705993165241-g2.webp","1705993165243-g3.webp"}',
        model: '',
        token_size: '',
        example_input: '',
        example_output: null,
        timeline: '10:30:00',
        category_module_id: 2,
        user_id: 6,
        type_id: 3,
        price: '0',
        favorite: null,
        category_name: 'Midjourney',
        type_name: 'image',
        imageUrls: [
          {
            type: 'logo',
            url: '/api/market/logo/1705993165240-logo2mid.webp'
          },
          {
            type: 'images_gallery',
            url: [
              '/api/market/images_gallery/1705993165241-g1.webp',
              '/api/market/images_gallery/1705993165241-g2.webp',
              '/api/market/images_gallery/1705993165243-g3.webp'
            ]
          },
          {
            type: 'thumbnail',
            url: '/api/market/thumbnail/1705993165241-thumb2m.webp'
          }
        ]
      },
      {
        id: 4,
        name: 'Perfect Text Generator For Social Media',
        description: '🤩🤖Introducing Social Media Text Generator - an essential tool for anyone looking to create quality content quickly and efficiently!',
        short_description: '🤩🤖Introducing Social Media Text Generator - an essential tool for anyone looking to create quality content quickly and efficiently!',
        full_description: '🤩🤖Introducing Social Media Text Generator - an essential tool for anyone looking to create quality content quickly and efficiently!',
        logo: '1705993543331-logo1.webp',
        external_link: 'https://example.com/awesome-task-manager',
        support_email: 'support@awesome-task-manager.com',
        website: 'https://www.awesome-task-manager.com',
        visibility_or_status: true,
        created_at: '2024-01-23T07:05:43.341Z',
        updated_at: '2024-01-23T07:05:43.341Z',
        thumbnail: '1705993543331-thumb1.webp',
        images_gallery: null,
        model: 'Chat - GPT-3.5 (gpt-3.5-turbo)',
        token_size: '59',
        example_input: 'how to spend less money\n',
        example_output: 'Hey guys! Today, we\'re going to talk about a subject that interests everyone: how to spend less money. If you are tired of seeing your money disappear quickly, not knowing where it is going, keep reading, because this post is for you.\n\nThe first thing you need to do is analyze your expenses. Make a list of everything you spend in a month and see if there are any items that could be cut or reduced. For example, if you\'re spending a lot of money at restaurants, you might try cooking more at home and taking food to work. Or maybe you can cancel that cable subscription you don\'t use as much.\n\nAnother important tip is to avoid impulse purchases. Too often, we spend money on things we don\'t need just because they\'re on sale or because we think we\'ll use them later. Before buying something, ask yourself if you really need it and if you can afford it.\n\nOne way to spend less money is to set savings goals. For example, you might decide that you\'re going to save 10% of your salary each month, or that you\'re going to cut a specific expense in half. Having a goal in mind helps you stay focused and motivated to save.\n\nAnother tip is to look for cheaper alternatives to the things you need to buy. For example, instead of buying brand name products, you might find generic options that are just as good and cost less. Or maybe you can buy clothes from thrift stores or second-hand websites.\n\nIt is also important to keep an eye on promotions and discounts. Many stores offer discounts for those who sign up for their email list or follow their social networks. In addition, you can find discount coupons on specialized websites or shopping apps.\n\nFinally, remember that small savings can make a big difference in the long run. If you manage to save only R$50 per month, at the end of the year you will have saved R$600. And if you invest that money, you can have an even greater return.\n\nSo guys these were some tips to spend less money. Remember that saving doesn\'t mean giving up doing things you love, but finding smarter ways to manage your finances. We hope these tips were helpful and that you start saving even more from now on. To the next!',
        timeline: '10:30:00',
        category_module_id: 4,
        user_id: 6,
        type_id: 1,
        price: '0',
        favorite: null,
        category_name: 'GPT',
        type_name: 'text',
        imageUrls: [
          {
            type: 'logo',
            url: '/api/market/logo/1705993543331-logo1.webp'
          },
          {
            type: 'thumbnail',
            url: '/api/market/thumbnail/1705993543331-thumb1.webp'
          }
        ]
      },
      {
        id: 5,
        name: 'Telegram Elite Messaging Solution',
        description: 'Revolutionize your Telegram experience with our cutting-edge VIP Kit. Immerse yourself in a world of heightened security, seamless communication, and unrivaled user satisfaction. From advanced features tailored to your needs to meticulous code optimization, this kit sets the standard for excellence. Elevate your Telegram interactions – embrace the future of messaging sophistication.',
        short_description: 'Revolutionize your Telegram experience with our cutting-edge VIP Kit. Immerse yourself in a world of heightened security, seamless communication, and unrivaled user satisfaction. From advanced features tailored to your needs to meticulous code optimization, this kit sets the standard for excellence. Elevate your Telegram interactions – embrace the future of messaging sophistication.',
        full_description: 'Revolutionize your Telegram experience with our cutting-edge VIP Kit. Immerse yourself in a world of heightened security, seamless communication, and unrivaled user satisfaction. From advanced features tailored to your needs to meticulous code optimization, this kit sets the standard for excellence. Elevate your Telegram interactions – embrace the future of messaging sophistication.',
        logo: '1705993853358-logo3.webp',
        external_link: 'https://example.com/awesome-task-manager',
        support_email: 'support@awesome-task-manager.com',
        website: 'https://www.awesome-task-manager.com',
        visibility_or_status: true,
        created_at: '2024-01-23T07:10:53.368Z',
        updated_at: '2024-01-23T07:10:53.368Z',
        thumbnail: '1705993853359-thumb3.webp',
        images_gallery: null,
        model: 'Chat - GPT-4 (gpt-4)',
        token_size: '137',
        example_input: '[specific features you want]\n[potential challenges]',
        example_output: '**Telegram VIP Kit Interface**\n\nWelcome to the Telegram VIP Kit, a cutting-edge communication platform prioritizing security, seamless user interaction, and an enriched experience.\n\n**Key Features:**\n1. **End-to-End Encryption:** Your messages are secure and private, ensuring only the intended recipient can access them.\n2. **Multi-Factor Authentication:** Extra layers of security to protect your account from unauthorized access.\n3. **Message Self-Destruction:** Set a timer for your messages to auto-delete, adding an extra layer of privacy.\n\n**Challenges Addressed:**\n1. **Secure Key Management:** Rigorous protocols in place to safeguard encryption keys.\n2. **User Privacy:** Robust measures to protect user data and communication content.\n3. **Real-time Synchronization:** Seamless updates across devices for a consistent experience.\n\n**Documentation:**\nDetailed guides for effortless onboarding, explaining features, security measures, and troubleshooting tips.\n\n**Optimized Codebase:**\nWritten in Python, following industry best practices for scalability and efficiency.\n\n**Thorough Testing:**\nReliability and security assured in various scenarios, from everyday use to high-traffic situations.\n\n**Design Philosophy:**\nA clean and modular design ensures flexibility for future updates and third-party integrations.\n\n**Error Messages:**\nUser-friendly error messages guide you through any issues, ensuring a smooth experience.\n\nStart exploring the Telegram VIP Kit today for a secure and elevated messaging experience!',
        timeline: '10:30:00',
        category_module_id: 4,
        user_id: 6,
        type_id: 1,
        price: '0',
        favorite: null,
        category_name: 'GPT',
        type_name: 'text',
        imageUrls: [
          {
            type: 'logo',
            url: '/api/market/logo/1705993853358-logo3.webp'
          },
          {
            type: 'thumbnail',
            url: '/api/market/thumbnail/1705993853359-thumb3.webp'
          }
        ]
      },
      {
        id: 6,
        name: 'Api Integration Helper ',
        description: '🔥Welcome to the API Integration Helper prompt! \n\n🌟A must-have for developers, software engineers, and tech enthusiasts. \n\n✅Fully customizable: Assists in integrating various APIs using any programming language. \n\n✅Ideal for use with GPT, Bing AI, Bard, Claude, and more. \n\n💪Simplify your API integration process with step-by-step guidance and best practices.',
        short_description: '🔥Welcome to the API Integration Helper prompt! \n\n🌟A must-have for developers, software engineers, and tech enthusiasts. \n\n✅Fully customizable: Assists in integrating various APIs using any programming language. \n\n✅Ideal for use with GPT, Bing AI, Bard, Claude, and more. \n\n💪Simplify your API integration process with step-by-step guidance and best practices.',
        full_description: '🔥Welcome to the API Integration Helper prompt! \n\n🌟A must-have for developers, software engineers, and tech enthusiasts. \n\n✅Fully customizable: Assists in integrating various APIs using any programming language. \n\n✅Ideal for use with GPT, Bing AI, Bard, Claude, and more. \n\n💪Simplify your API integration process with step-by-step guidance and best practices.',
        logo: '1706006996884-logo4.webp',
        external_link: 'https://example.com/awesome-task-manager',
        support_email: 'support@awesome-task-manager.com',
        website: 'https://www.awesome-task-manager.com',
        visibility_or_status: true,
        created_at: '2024-01-23T10:49:56.894Z',
        updated_at: '2024-01-23T10:49:56.894Z',
        thumbnail: '1706006996884-thumb4.webp',
        images_gallery: null,
        model: 'Chat - GPT-4 (gpt-4)',
        token_size: '57',
        example_input: '[API] - "Twitter API"\n\n[programming language] - "Python"\n',
        example_output: 'Integrating the Twitter API into a Python project involves several steps, from initial setup and authentication to making requests and handling responses. Here’s a step-by-step guide to help you through the process:\n\n1. Setup\n1.1. Create a Twitter Developer Account\nGo to the Twitter Developer Platform and sign up for a developer account.\nOnce approved, create a new application in the developer portal.\nTake note of the API key, API secret key, Access token, and Access token secret generated for your app.\n1.2. Set Up Your Python Environment\nEnsure that Python is installed on your system.\nUse a virtual environment for your project (python -m venv env).\nActivate the virtual environment.\nInstall the necessary libraries, such as requests or tweepy, using pip install requests tweepy.\n\n2. Authentication\n2.1. OAuth Authentication\nTwitter uses OAuth for authentication. You can authenticate via OAuth 1.0a (user context) or OAuth 2.0 Bearer Token (app context).\nFor OAuth 1.0a, you need to use your consumer keys and access tokens.\nFor OAuth 2.0, you only need your API key and secret.\n2.2. Using Tweepy for OAuth\nTweepy is a popular Python library for interacting with the Twitter API.\n\nimport tweepy\n\nclient = tweepy.Client(\n    consumer_key=\'APIKey\',\n    consumer_secret=\'APISecretKey\',\n    access_token=\'AccessToken\',\n    access_token_secret=\'AccessTokenSecret\'\n)\nReplace \'APIKey\', \'APISecretKey\', \'AccessToken\', and \'AccessTokenSecret\' with your actual credentials.\n\n3. Making Requests\n3.1. Using Tweepy\nTweepy simplifies making requests to the Twitter API. You can post a tweet, get tweets, or stream tweets in real-time.\n\n# To post a tweet\nclient.create_tweet(text="Hello Twitter!")\n\n# To get tweets from a user\'s timeline\ntweets = client.get_users_tweets(id=\'user_id\')\nAlways check the Twitter API documentation for the correct endpoints and methods.\n3.2. Using requests Library\nIf you’re not using Tweepy, you can use the requests library to make HTTP requests.\n\nimport requests\n\nurl = \'https://api.twitter.com/2/tweets\'\nheaders = {\n    \'Authorization\': \'Bearer YOUR_BEARER_TOKEN\',\n    \'Content-Type\': \'application/json\',\n}\npayload = {\n    \'text\': \'Hello Twitter!\'\n}\nresponse = requests.post(url, headers=headers, json=payload)\n\n4. Handling Responses\n4.1. Check the Status Code\nAlways check the response\'s status code to see if your request was successful (200 range) or if it failed (400 or 500 range).\n4.2. Parsing the Response\nUse the .json() method to parse JSON responses.\n\nif response.status_code == 200:\n    data = response.json()\n\nBest Practices\nRate Limiting: Be aware of the rate limits imposed by the Twitter API to avoid being blocked.\nError Handling: Implement robust error handling to catch and respond to issues like rate limiting, server errors, or bad requests.\nLogging: Keep logs for requests and responses to debug issues.\nSecurity: Keep your API keys and tokens secure. Do not hard-code them into your source code. Use environment variables or configuration files.\nCompliance: Follow Twitter’s guidelines to ensure your application complies with their policies.\n\nCommon Pitfalls to Avoid\nHardcoding Credentials: Never hardcode your credentials. Always use environment variables or secure means of storing them.\nIgnoring Errors: Not properly handling errors can cause your application to fail silently or crash.\nOverlooking Rate Limits: Exceeding rate limits can result in your app being temporarily or permanently banned from using the API.\nMisinterpreting Responses: Ensure you correctly interpret the API\'s responses, especially when dealing with pagination or meta information.\n\nConclusion\nThis guide covers the basics of integrating the Twitter API with Python. For specific use cases, always refer to the latest version of the Twitter API documentation as endpoints and usage policies may change.',
        timeline: '10:30:00',
        category_module_id: 4,
        user_id: 6,
        type_id: 1,
        price: '0',
        favorite: null,
        category_name: 'GPT',
        type_name: 'text',
        imageUrls: [
          {
            type: 'logo',
            url: '/api/market/logo/1706006996884-logo4.webp'
          },
          {
            type: 'thumbnail',
            url: '/api/market/thumbnail/1706006996884-thumb4.webp'
          }
        ]
      },
      {
        id: 7,
        name: 'Futuristic Car Garages',
        description: 'You can produce different Futuristic Car Garage & Futuristic Cars with this prompt.',
        short_description: 'You can produce different Futuristic Car Garage & Futuristic Cars with this prompt.',
        full_description: 'You can produce different Futuristic Car Garage & Futuristic Cars with this prompt.',
        logo: '1706007774857-logo5.webp',
        external_link: 'https://example.com/awesome-task-manager',
        support_email: 'support@awesome-task-manager.com',
        website: 'https://www.awesome-task-manager.com',
        visibility_or_status: true,
        created_at: '2024-01-23T11:02:54.879Z',
        updated_at: '2024-01-23T11:02:54.879Z',
        thumbnail: '1706007774857-thumb5car.webp',
        images_gallery: '{"1706007774857-g4car.webp","1706007774867-g4car1.webp","1706007774868-g4car2.webp","1706007774868-g4car3.webp","1706007774868-g4car4.webp","1706007774868-g4car5.webp"}',
        model: '',
        token_size: '',
        example_input: '',
        example_output: '',
        timeline: '10:30:00',
        category_module_id: 1,
        user_id: 6,
        type_id: 3,
        price: '0',
        favorite: null,
        category_name: 'Stable Diffusion',
        type_name: 'image',
        imageUrls: [
          {
            type: 'logo',
            url: '/api/market/logo/1706007774857-logo5.webp'
          },
          {
            type: 'images_gallery',
            url: [
              '/api/market/images_gallery/1706007774857-g4car.webp',
              '/api/market/images_gallery/1706007774867-g4car1.webp',
              '/api/market/images_gallery/1706007774868-g4car2.webp',
              '/api/market/images_gallery/1706007774868-g4car3.webp',
              '/api/market/images_gallery/1706007774868-g4car4.webp',
              '/api/market/images_gallery/1706007774868-g4car5.webp'
            ]
          },
          {
            type: 'thumbnail',
            url: '/api/market/thumbnail/1706007774857-thumb5car.webp'
          }
        ]
      }
    ]