import requests
import numpy as np

# API Keys (replace with your keys)
MORALIS_API_KEY = "your-moralis-api-key"
ALCHEMY_API_KEY = "your-alchemy-api-key"

# Fetch NFT metadata and royalty data from OpenSea
def fetch_opensea_royalty(contract_address, token_id):
    url = f"https://api.opensea.io/api/v2/chain/ethereum/contract/{contract_address}/nfts/{token_id}"
    headers = {"accept": "application/json"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data.get("nft", {}).get("royalty", 0)
    return None

# Fetch NFT royalty data from Moralis
def fetch_moralis_royalty(contract_address, token_id):
    url = f"https://deep-index.moralis.io/api/v2/nft/{contract_address}/{token_id}"
    headers = {"X-API-Key": MORALIS_API_KEY}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data.get("royalty", 0)
    return None

# Fetch NFT royalty data from Alchemy
def fetch_alchemy_royalty(contract_address, token_id):
    url = f"https://eth-mainnet.g.alchemy.com/nft/v2/{ALCHEMY_API_KEY}/getNFTMetadata?contractAddress={contract_address}&tokenId={token_id}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data.get("royalty", 0)
    return None

# Fraud detection: Check if royalty is missing or manipulated
def detect_fraud(royalty_values):
    if None in royalty_values:
        return "🚨 Warning: Inconsistent or missing royalty data!"
    
    mean_royalty = np.mean(royalty_values)
    std_dev = np.std(royalty_values)
    
    for royalty in royalty_values:
        if abs(royalty - mean_royalty) > 2 * std_dev:  # Outlier detection
            return "🚨 Possible Fraud Detected: Unusual royalty value found!"
    
    return "✅ Royalty data appears valid."

# Main function to get consensus on NFT royalty
def get_nft_royalty_consensus(contract_address, token_id):
    sources = {
        "OpenSea": fetch_opensea_royalty(contract_address, token_id),
        "Moralis": fetch_moralis_royalty(contract_address, token_id),
        "Alchemy": fetch_alchemy_royalty(contract_address, token_id),
    }

    royalty_values = [value for value in sources.values() if value is not None]
    
    if not royalty_values:
        return "⚠️ No royalty data available from any source."

    # Use median for consensus to avoid extreme values
    consensus_royalty = np.median(royalty_values)

    fraud_status = detect_fraud(royalty_values)

    return {
        "Consensus Royalty": consensus_royalty,
        "Data Sources": sources,
        "Fraud Status": fraud_status
    }

# Example usage
contract_address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"  # BAYC
token_id = "1"

result = get_nft_royalty_consensus(contract_address, token_id)
print(result)
