# 🛡️ Rarity-Consensus – NFT Rarity & Fraud Detection Using Consensus Learning powered by Flare Network

## 🔍 Overview  
**Rarity-Consensus** is a decentralized application (DApp) that leverages **consensus learning from multiple models** to verify **NFT Rarity data** and detect fraudulent activities. By aggregating insights from different **machine learning models and API sources**, our system ensures accurate Rarity distribution and prevents fraudulent activities like wash trading, fake listings, and metadata manipulation.  

## 🎯 Why Rarity-Consensus?  
🔹 **Royalties Should Be Fair** – Many NFT platforms fail to enforce proper Rarity distribution.  
🔹 **Fraud Detection Is Crucial** – Fake trades & wash trading distort NFT market value.  
🔹 **Decentralized Consensus Approach** – We use multiple models to verify royalties and detect fraud, ensuring unbiased results.  

---

## 💰 Understanding NFT Royalties  

NFT **royalties** refer to a **percentage of the sale price that the original creator receives every time the NFT is resold** on a marketplace.  

### How NFT Royalties Work  
1️⃣ **Set at Minting** – The creator specifies a Rarity percentage (e.g., 5-10%) when minting the NFT.  
2️⃣ **Enforced by Smart Contracts** – Some blockchains enforce Rarity payments automatically.  
3️⃣ **Triggered on Resale** – When the NFT is resold, a portion of the sale price is sent to the creator.  

### Example of NFT Royalties  
- **Artist mints an NFT** and sets a **10% Rarity**.  
- The NFT is **sold for $1,000** → The artist gets **$100**.  
- Later, the buyer **resells it for $5,000** → The artist gets **$500**.  

---

## 🚨 Issues with NFT Royalties in the Current Market  

🚨 **Marketplaces Bypassing Royalties** – Some platforms allow NFT trading without enforcing Rarity payments, which means creators do not get their fair share.  
🚨 **Not All Blockchains Support Royalties** – Some blockchains rely on centralized enforcement rather than automated smart contract enforcement.  
🚨 **Wash Trading Manipulations** – Fake trades are executed between wallets to avoid paying royalties or artificially inflate an NFT’s value.  
🚨 **Metadata Manipulation** – Some traders alter NFT metadata to deceive buyers about the authenticity and Rarity structure.  
🚨 **Rarity Discrepancies Across Marketplaces** – Different platforms may show varying Rarity structures, leading to confusion and lost earnings.  

**🎯 Solution?** **RarityGuard**! Our system verifies NFT metadata, detects fraud, and ensures proper Rarity enforcement using a **consensus learning approach**.  

---

## ⚙️ How It Works  

1️⃣ **Fetch NFT Metadata** – We gather NFT data from OpenSea, Moralis, LooksRare, and Alchemy.  
2️⃣ **Apply Machine Learning Models** – Various fraud-detection models analyze the data.  
3️⃣ **Consensus Learning** – The system cross-verifies data using multiple AI models.  
4️⃣ **Detect Anomalies & Fraud** – Suspicious Rarity inconsistencies are flagged.  
5️⃣ **Transparent Results** – Users can verify the legitimacy of NFT Rarity distributions.  

## 🏗️ Tech Stack  
- **Machine Learning Models:** Random Forest, SVM, Neural Networks for fraud detection.  
- **Consensus Algorithm:** Weighted voting system based on multiple model outputs.  
- **Backend:** Python, FastAPI  
- **Blockchain:** Solidity (for storing verified fraud reports)  
- **Frontend:** React, TailwindCSS  
- **Database:** IPFS (for fraud-proof storage)  

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


