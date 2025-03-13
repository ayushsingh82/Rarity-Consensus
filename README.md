# 🛡️ Rarity-Consensus – NFT Rarity & Fraud Detection Using Consensus Learning powered by Flare Network

## 🔍 Overview  
**Rarity-Consensus** is a decentralized application (DApp) that leverages **consensus learning from multiple models** to verify **NFT Rarity data** and detect fraudulent activities. By aggregating insights from different **machine learning models and API sources**, our system ensures accurate Rarity distribution and prevents fraudulent activities like wash trading, fake listings, and metadata manipulation.  


# NFT Rarity Scoring Methods

## Overview
NFT rarity scoring helps determine the uniqueness and value of an NFT in a collection. Below are different methods used for calculating rarity based on metadata traits.

---

## 📌 1️⃣ Trait Rarity Score (Basic Probability Method)
### 💡 Formula:
```math
Trait Rarity = \frac{1}{Trait Occurrence in Collection / Total NFTs}
```
### 📌 Example:
- **NFT Collection:** 10,000 NFTs  
- **Trait:** "Golden Hat" appears in **100 NFTs**  
- **Rarity Score:**  
```math
1 / (100 / 10,000) = 100
```

✅ **Pros:** Simple and widely used.  
❌ **Cons:** Doesn't consider trait importance (some rare traits are more valuable than others).  

---

## 📌 2️⃣ Average Trait Rarity Score
### 💡 Formula:
```math
Avg. Rarity = \frac{\sum (Rarity of Each Trait)}{Total Traits}
```
### 📌 Example:
If an NFT has:
- **Golden Hat (Rarity: 100)**  
- **Red Eyes (Rarity: 50)**  
- **Fire Background (Rarity: 20)**  

```math
(100 + 50 + 20) / 3 = 56.67
```

✅ **Pros:** Simple to calculate.  
❌ **Cons:** Rare traits can be overshadowed by common traits.  

---

## 📌 3️⃣ Custom Weighted Rarity Score (Trait Importance Considered)
### 💡 Formula:
```math
Weighted Rarity Score = \sum (Trait Rarity \times Weight Factor)
```
### 📌 Example:
If **Golden Hat** is **more important** than background color, we can assign it a **weight of 2**, while others get **1**:
```math
(100 \times 2) + (20 \times 1) + (10 \times 1) = 230
```

✅ **Pros:** More accurate for collections with "hero traits" (like BAYC gold fur).  
❌ **Cons:** Requires **manual weighting**, which may be **subjective**.  

---

## 📌 Conclusion
| **Method** | **Best For** | **Commonly Used?** |
|------------|-------------|------------------|
| **Trait Rarity Score** | Simple rankings | ✅ Yes |
| **Average Trait Rarity** | Quick comparison | ❌ No |
| **Custom Weighted Rarity Score** | Custom collections | ✅ Yes |

If you're building an **NFT rarity analysis system**, combining **Weighted Rarity Score** with **Metadata Analysis** is the most effective approach! 🚀




## 🏗️ Tech Stack  
- **Machine Learning Models:** Random Forest, SVM, Neural Networks for fraud detection.  
- **Consensus Algorithm:** Weighted voting system based on multiple model outputs.  
- **Backend:** Python, FastAPI  
- **Blockchain:** Solidity (for storing verified fraud reports)  
- **Frontend:** React, TailwindCSS  


## 🔗 API Integrations  
🔸 **OpenSea API** – Fetches NFT metadata & Rarity details.  
🔸 **Moralis API** – Multi-chain NFT metadata provider.  
🔸 **Alchemy API** – Cross-verifies NFT data for consistency.  
🔸 **LooksRare API** – Additional marketplace data for fraud detection.  

---

## 🚀 Consensus Learning Approach  

✅ **Multiple Data Sources** – Aggregating NFT metadata from various platforms.  
✅ **Multiple Models** – Fraud detection models analyze patterns (Random Forest, Neural Networks, SVM).  
✅ **Weighted Consensus Algorithm** – Combines results from different models & sources.  
✅ **Threshold-Based Validation** – If inconsistencies exceed a confidence threshold, they are flagged as suspicious.  

## 📊 Fraud Detection Metrics  
🚨 **Anomaly Detection** – Identifies wash trading patterns.  
🚨 **Metadata Manipulation** – Detects mismatches in metadata across sources.  
🚨 **Rarity Discrepancy** – Flags NFTs with incorrect or missing Rarity data.  

---


