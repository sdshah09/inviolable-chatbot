# AI-Driven Platform for Digital Resilience Against Disinformation and Online Harassment

## Overview
Our organization is dedicated to empowering resource-limited organizations to build the digital resilience necessary to withstand disinformation, targeted harassment, and other forms of online toxicity. This platform consolidates the founders' intellectual property and expertise—including training materials, templates, original research, counter-disinformation strategic communications campaigns, and publicly available research and data—into an accessible, affordable, and navigable user-facing platform.

By leveraging AI, we have created a platform that offers tailored resources to users, based on their specific needs and scenarios, helping them effectively manage disinformation and online harassment.

## Problem Statement
Organizations with limited resources often struggle to build the digital resilience required to counter disinformation and harassment campaigns. These challenges require an AI-driven solution that can provide real-time, scenario-based responses to manage different types of interactions. The platform must support multiple communication channels to ensure seamless access to information and assistance.

## Solution
We developed an AI-driven platform using Google Vertex AI Builder, custom datasets, and a React-based chatbot. The platform handles interactions in three distinct scenarios:

- **Calm or Normal Conversation**: The chatbot provides straightforward responses and relevant resources.
- **Angry or Aggressive Behavior**: The chatbot is designed to recognize anger or aggression and responds in a way that deescalates the situation, helping to clarify any doubts and provide useful information.
- **Threatening Behavior**: If the interaction becomes threatening, the chatbot will continue efforts to deescalate. If the threat escalates further, it provides contact information for higher-level support and terminates the conversation.

Additionally, we integrated Google Dialogflow to enable omnichannel support, allowing the AI agent to interact with users via:

- Text messages
- Emails
- Phone calls

This omnichannel capability ensures that users can access support through their preferred communication channels, providing a seamless and consistent experience. The platform can also be deployed for specific datasets, such as those used in Florida and Georgia state elections.

## Key Technologies
- **Google Vertex AI Builder**: Used to develop the AI backend, capable of processing and analyzing custom datasets for scenario-based responses.
- **Custom Datasets**: Ensured the platform delivers relevant, context-specific support to various organizations facing disinformation or harassment.
- **React**: Implemented the frontend chatbot interface to guide users through the platform.
- **Google Dialogflow**: Enabled omnichannel communication, allowing the AI agent to interact via multiple channels such as text messages, emails, and phone calls.

## How it Works
1. **Scenario Handling**: The AI chatbot evaluates the user's tone and categorizes the conversation into one of three scenarios (Calm, Aggressive, or Threatening). Based on this, the chatbot provides a personalized response:
   - Calm interactions receive informative responses and relevant resources.
   - Aggressive or threatening interactions trigger deescalation responses designed to defuse tension while addressing the user’s needs.
   - If the threat becomes too severe, the chatbot provides external contact information and ends the conversation to ensure the safety of staff.
   
2. **Omnichannel Support**: Through Google Dialogflow, the platform can interact with users across various communication channels, ensuring accessibility regardless of the medium (text, email, or phone).

## Benefits
- **Scalable and Adaptive**: Organizations can access the platform and tailor it to their specific needs, even with limited resources.
- **Lower Barrier to Entry**: By offering different levels of support and resources, organizations can easily access tools that are relevant to their size and budget.
- **Personalized Support**: AI-powered responses ensure that each interaction is handled appropriately, providing users with accurate information and effective support.

## Conclusion
This AI-driven platform enables organizations with limited resources to build the digital resilience they need to combat disinformation and harassment campaigns. With its omnichannel support, adaptive responses, and tailored resources, the platform ensures that organizations can effectively manage digital threats, regardless of their size or expertise.
