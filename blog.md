### **A Guide to Computer Vision:** 

### **From Core Tasks to Modern Architectures**

(2025)  
---

What is “**Computer Vision**”?

* Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world.   
* It lets machines accurately identify and classify objects and react to what they "see”, just like how humans do.  
* This guide will break down primary tasks in computer vision and the underlying technologies that power them (like CNNs and Vision Transformers).  
* Also how they are evolving and being applied in complex systems like autonomous vehicles.

---

### 

### **Part 1: The Core Tasks of Computer Vision**

#### **1\. Image Classification**

* **Task:** Assign a single label to an entire image.  
* **Goal:** Answer the question, "What is the primary subject of this image?"  
* **Example:** An image of a golden retriever is fed into the model, and it outputs the single label "dog."  
* **Common Use Cases:**  
  * **Medical Diagnosis:** Analyzing an X-ray to classify it as showing "pneumonia" or "no pneumonia."  
  * **Content Moderation:** Automatically detecting and flagging inappropriate images.  
  * **Image Search:** Tagging and categorizing images in a library for easy retrieval.

**2\. Object Detection**

* **Task:** Find all objects of interest in an image and draw a bounding box around each one.  
* **Goal:** Answer the question, "What objects are in this image, and where are they located?"  
* **Example:** A street scene is processed, and the model outputs bounding boxes with labels for each "car," "pedestrian," and "traffic light."  
* **Common Use Cases:**  
  * **Self-Driving Cars:** Detecting other vehicles, people, and traffic signs to navigate safely.  
  * **Face Detection:** Identifying faces for photo tagging, security cameras, or AR filters.  
  * **Retail Analytics:** Counting products on a shelf to monitor inventory.

#### **3\. Semantic Segmentation**

* **Task:** Classify every single pixel in the image, assigning each to a specific category.  
* **Goal:** Answer the question, "What does every pixel in this image belong to?" It cares about categories, not individual objects.  
* **Example:** For a road scene, all pixels that are part of the road are colored blue, all tree pixels are green, and all sky pixels are gray. If two cars are next to each other, they are both colored "car" without distinction.  
* **Common Use Cases:**  
  * **Autonomous Driving:** Identifying the exact drivable area, lane markings, and sidewalks.  
  * **Medical Imaging:** Precisely highlighting the boundaries of tumors or organs in an MRI scan.  
  * **Augmented Reality:** Replacing the background of an image by identifying all "background" pixels.

#### **4\. Instance Segmentation**

* **Task:** Classify every pixel *and* differentiate between individual instances of the same object category.  
* **Goal:** Answer the question, "Which pixels belong to which specific object?" This is the most detailed of the core tasks.  
* **Example:** In a scene with multiple people, each person is outlined with a different color, separating them as distinct instances.  
* **Common Use Cases:**  
  * **Medical Imaging:** Isolating and measuring multiple tumors individually, even if they are overlapping.  
  * **Robotics:** Allowing a robotic arm to identify and pick up a specific object from a pile of similar objects.  
  * **Wildlife Tracking:** Counting and tracking individual animals in a herd.

---

#### 

#### **Summarization:**

* Understanding these concepts might seem confusing at first, but they're really just ways of mimicking how our brains interpret the world  
* Here’s breakdown in more human relatable terms.

**\# Image Classification**: 

* *What is this image?* → "It's a dog."

**\# Object Detection**: 

* *What are in this image, and where are they?* → "There's a dog over here, and a cat over there."

**\# Semantic Segmentation**: 

* *Color every “dog” in this image blue and every “human” in green*.

**\# Instance Segmentation**: 

* *Color each individual dog in a different shade of blue, and each individual human in a different shade of green so that I can distinguish unique dogs and humans.*

---

### 

### **Part 2: The Engines of Vision: CNNs vs. Vision Transformers (ViTs)**

* Now we know **“what”** computer vision is capable of doing, the real question is **“how”** can we perform those tasks.  
* The car can drive(image classification, object detection…),   
  But what's the engine powering it?


#### **The Classic Engine: Convolutional Neural Networks (CNNs)**

A CNN is a neural network that "sees" an image by applying a series of learnable filters (convolutions) across it. Each layer learns to recognize increasingly complex patterns.

* **How it Works:**  
  * **Early Layers:** Detect simple features like edges, corners, and colors.  
  * **Mid Layers:** Combine these features to recognize textures, eyes, or wheels.  
  * **Deep Layers:** Assemble patterns to identify whole objects like dogs, cars, or faces.  
* **Analogy:** A CNN is like a **police dog**. It sniffs the scene patch by patch, using local cues to build up a picture of what happened. It is fast, efficient, and highly skilled at recognizing familiar patterns.  
* **Strengths:** Excellent performance, fast, and efficient, especially on smaller datasets or for real-time applications.

#### 

#### **The Modern Engine: Vision Transformers (ViTs)**

A Vision Transformer takes a completely different approach, borrowed from natural language processing. Instead of sliding filters, it analyzes the relationships between different parts of an image all at once.

* **How it Works:**  
  1. The image is broken down into a grid of fixed-size patches (e.g., 16x16 pixels).  
  2. Each patch is treated like a "word" in a sentence.  
  3. A mechanism called **self-attention** weighs the importance of every patch relative to all other patches to understand the image's overall structure.  
* **Analogy:** A ViT is like a **detective**. It stands back and looks at the entire crime scene at once, noting the relationships between all pieces of evidence to form a global understanding. "The placement of this object *here* is significant because of that object *over there*."  
* **Strengths:** Can achieve state-of-the-art accuracy, especially on very large datasets, because it can learn complex, long-range relationships within an image that CNNs might miss.

Both CNNs and ViTs act as powerful **feature extractors**. Their output can then be fed into a task-specific "head" to produce the final result, whether it's a classification label, bounding boxes, or a segmentation mask.

---

### 

### **Part 3: Application Spotlight \- Autonomous Driving**

* How are computer vision techniques like CNNs and Transformers being used in real-world applications?  
* One of the most advanced and compelling examples is in autonomous driving. aka self-driving cars.  
* So What do modern self-driving cars use?   
  * The answer is a **hybrid approach**, leveraging the strengths of both CNNs and Transformers. This synergy allows them to interpret complex driving environments more accurately and make smarter decisions on the road.

#### **Where Each is Used in an Autonomous Driving Stack:**

* **CNNs are still used for:**  
  * **Real-time Object Detection:** Fast, efficient detection of cars and pedestrians where low latency is critical.  
  * **Lightweight modules** running on specialized hardware.  
* **Transformers are taking over for:**  
  * **Bird’s-Eye View (BEV) Perception:** Creating a top-down, 3D map of the environment around the car. Transformers are vastly superior at this.  
  * **Sensor Fusion:** Combining inputs from multiple cameras, LiDAR, and radar into a single, coherent understanding of the world.  
  * **End-to-End Driving:** Models that take in sensor data and directly output driving commands (e.g., steer, accelerate).

In summary, while the industry trend is moving decisively toward **Transformers** for high-level perception, **CNNs** remain a vital, battle-tested tool for tasks where speed and efficiency are paramount. Each have pros and cons.

---

### 

### **Part 4: What’s the Current State of Computer Vision?**

### 

### **The Evolution of Vision Architectures**

### Similar to any other AI/ML fields, Computer Vision has also been accelerating rapidly, causing major paradigm shifts and dominant architecture changes every few years. 

### The diagram below summarizes the evolution of computer vision over the past decade

| Period | Dominant Paradigm | Key Idea |
| :---: | :---: | :---: |
| 2012–2014 | End-to-End CNNs(AlexNet) | Just stack more layers |
| 2015–2018 | Residual Learning(ResNet) | Go deeper with skip connections |
| 2019–2020 | Efficient Architectures(EfficientNet) | Optimize for compute, scale wisely |
| 2020–2021 | Transformer Adoption(Pure Transformers) | Attention \> Convolution |
| 2022-Present | Foundation & Self-Supervised Models(ConvNeXt) | Pretrain once, generalize everywhere |

### 

### **Where We Are Now**

**Current Paradigm Shift:** 

* **Pure Transformers  \=\> Foundation Models & Self-Supervised-Learning**

The field of computer vision has undergone a significant evolution—not just in architecture (e.g., from CNNs to Transformers), but in the entire **training paradigm**.

**2020-2021**

 **Pure Transformers(“Attention replaces convolution”)**

* This phase marks the **first major shift from convolutional neural networks (CNNs)** to **pure Transformer-based models** in computer vision.  
* Vision models now use **self-attention** mechanisms instead of convolutional filters. But they still require **huge datasets** or **heavy pretraining** to perform well.

**2022-Present** 

**Foundation Models & SSL(“Pretrain once, generalize everywhere”)**

* This is not just about architecture (like Transformers or CNNs) but about a **shift in the entire training paradigm**:  
* It’s about building **general-purpose, large-scale models** trained with **minimal human labels**, often in a **self-supervised** or **multimodal** fashion.

| Aspect | 2020-2021 Transformers | 2022 \- Present Foundation Models & SSL |
| :---: | :---: | :---: |
| Focus | Model architecture (Transformer vs CNN) | Training paradigm (self-supervision, scale, generalization) |
| Key shift | Replace convolution with attention | Pretrain large models to generalize across tasks |
| Scope | Vision tasks | Vision \+ Language, Segmentation, Open-world tasks |
| Examples | ViT, DeiT | CLIP, SAM |

