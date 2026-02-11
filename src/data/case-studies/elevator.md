---
title: "Reducing Perceived Waiting Time in Residential Elevators"
description: "How I turned a job interview challenge into a user-centered design exploration using psychology and research to improve the everyday elevator experience"
order: 3
slug: "reducing-perceived-waiting-time-in-residential-elevators"
---

## TL;DR

As part of a job interview, I explored how to improve the everyday elevator experience in residential buildings. Through user interviews, domain research, and insights from the psychology of waiting, I identified waiting uncertainty as the core problem. I then designed a set of environmental, informational, and accessible UI interventions aimed at reducing _perceived_ waiting time rather than raw elevator speed.

## Context

This was a conceptual design exercise completed during a job interview. Rather than focusing on technical optimisation or new hardware, I treated the elevator as a product experience and explored how research and psychology could inform early design decisions.

## Research

I started by learning about elevators and people’s experiences with them.

- **User interviews** – I interviewed 9 people. Participants described a wide range of frustrations. However, waiting for the elevator was by far their biggest complaint.
- **Domain research** – To understand which aspects of the experience could realistically be influenced, I read 20 articles on elevator design and operation. The main insight was that user satisfaction is more strongly influenced by perceived waiting time than actual speed.
- **Psychology of waiting** – I read up on the psychology of waiting. I learned that many factors influence our perception of waiting time. For instance, waiting time seems longer when we don’t know how long it’ll be, what is causing it, or when it’s perceived as unfair.

## Requirements and constraints

To ground the concept, I defined the following assumptions and constraints:

- **Client:** Mitsubishi, seeking differentiation through experience rather than speed  
- **Setting:** Luxury residential buildings with 4–12 floors, globally  
- **Users:** Residents of all ages, including people with sensory, motor, or other impairments  
- **Technical constraint:** A _collective control_ algorithm, meaning the elevator only changes direction when all requests in the current direction have been served

## Problem statement

I distilled my research, requirements and constraints into a concise problem statement:

> Improve the elevator experience of residents of 4‑to‑12‑story luxury apartment buildings by reducing perceived waiting time.

## Use research insights

I used what I had learned about elevators and the psychology of waiting to devise features that would reduce perceived waiting time.

- **Speed** – The elevator will travel up at 83 km/h (above which people get sick) and down at 36 km/h (above which people experience the sensation of falling). This reduces both actual and perceived waiting time.
- **Mirrors** – The shaft doors will feature mirrors. Occupied time feels shorter and people naturally tend to check their appearance. This classic trick reduces perceived waiting time.
- **Time** – Computer screens behind the semi‑transparent mirrors will display the current time. Seeing a clock counters the tendency to overestimate waiting time.
- **Weather** – The opposite mirror door will show weather information, providing useful context and sparking conversation, which makes group waiting feel shorter.
- **Color** – Cool colors (e.g., blue) will be used in the waiting area, as warm tones are linked to longer perceived wait times.
- **Light** – The waiting area will be dimly lit, as lower light levels are said to decrease perceived waiting time.
- **Scent** – A diffuser will emit a low‑concentration blend of fragrances linked to reducing anxiety, such as lavender and nutmeg.
- **Accessibility** – Call buttons will be placed low enough for wheelchair users and children, provide tactile feedback, include braille, and be complemented by a voice UI announcing floor, elevator location, direction, and upcoming stops.

## Explore visual UI concepts

The elevator will also feature a visual UI that communicates the same information as the voice UI to sighted and hearing‑impaired residents. This further reduces perceived waiting time by explaining why the elevator has not yet arrived.

Through sketching, I explored various UI details.

- **Orientation** – Should the UI be vertical (matching the elevator’s movement) or horizontal (placed above the doors for better visibility)?
- **Floor indicator** – Numbers are informative, but can cause cultural confusion (different ground‑floor conventions, “unlucky” numbers). Shapes avoid this, but convey less detail.
- **Cause of stop** – Showing whether a stop is for pickup or drop‑off shortens perceived waiting time, but risks visual clutter.

## Create hi‑fi mockups

I settled on displaying only four essential pieces of information:

1. The floor the user is on
2. The floor the elevator is on
3. The floors the elevator will stop on
4. The direction of the elevator

## User tests and iteration

### First round

Three participants evaluated two concepts. Both effectively conveyed the elevator’s floor and stops, but the direction and the user’s own floor were not clear for everyone.

### Second round

A refined concept was tested with four new participants. Direction became obvious for all, though some still struggled to identify their own floor. A different visual indicator or a floor‑number sign next to the elevator could resolve this.

## Final result

Based on research, testing, and iteration, the recommended feature set is:

- High‑speed elevator
- Semi‑transparent mirrors on shaft doors
- Weather information displayed on one mirror door
- Current time displayed on other mirror door
- Cool‑colored (e.g., blue) waiting area paint
- Dim lighting in the waiting area
- Anxiety‑reducing fragrance diffusion
- Low‑placed braille call buttons
- Voice UI announcing floor, direction, and stops

These combined solutions aim to make the elevator experience smoother, faster, and psychologically more pleasant for residents of luxury apartments.

## Reflection

The biggest learning was how much reframing the problem shaped the outcome. Focusing on perceived waiting time rather than speed led me in directions I wouldn’t have explored otherwise.

If I were to redo the project, I’d define clearer success metrics and narrow the solution space. I’d also want to test the UI in a more realistic waiting context to understand how people actually feel while using it, not just whether they understand it.
