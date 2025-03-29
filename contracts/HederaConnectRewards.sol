// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract HederaConnectRewards is ERC20, Ownable, ReentrancyGuard {
    // Reward configuration
    uint256 public constant LIKE_POINTS = 1;
    uint256 public constant SHARE_POINTS = 2;
    uint256 public constant COMMENT_POINTS = 1;
    uint256 public constant POINTS_TO_TOKEN_RATE = 100; // 100 points = 1 token

    // Structs
    struct ContentCreator {
        address creator;
        uint256 totalPoints;
        uint256 totalRewardsClaimed;
    }

    struct Article {
        address author;
        uint256 likes;
        uint256 shares;
        uint256 comments;
        bool isVerified;
    }

    // Mappings
    mapping(address => ContentCreator) public contentCreators;
    mapping(bytes32 => Article) public articles;
    mapping(address => uint256) public userPoints;
    mapping(address => uint256) public pendingRewards;

    // Events
    event ArticleSubmitted(bytes32 articleId, address author);
    event ArticleVerified(bytes32 articleId);
    event PointsEarned(address user, uint256 points, string activity);
    event RewardClaimed(address user, uint256 amount);

    constructor() ERC20("HederaConnectToken", "HCT") {
        // Initial token supply (optional)
        _mint(msg.sender, 1000000 * 10**decimals());
    }

    // Article Submission and Verification
    function submitArticle(bytes32 articleId, string memory articleUrl) external {
        require(articles[articleId].author == address(0), "Article already exists");
        
        articles[articleId] = Article({
            author: msg.sender,
            likes: 0,
            shares: 0,
            comments: 0,
            isVerified: false
        });

        emit ArticleSubmitted(articleId, msg.sender);
    }

    function verifyArticle(bytes32 articleId) external onlyOwner {
        require(!articles[articleId].isVerified, "Article already verified");
        articles[articleId].isVerified = true;
        emit ArticleVerified(articleId);
    }

    // Engagement Tracking
    function recordLike(bytes32 articleId) external {
        require(articles[articleId].author != address(0), "Article does not exist");
        articles[articleId].likes++;
        
        address author = articles[articleId].author;
        userPoints[author] += LIKE_POINTS;
        contentCreators[author].totalPoints += LIKE_POINTS;

        emit PointsEarned(author, LIKE_POINTS, "like");
    }

    function recordShare(bytes32 articleId) external {
        require(articles[articleId].author != address(0), "Article does not exist");
        articles[articleId].shares++;
        
        address author = articles[articleId].author;
        userPoints[author] += SHARE_POINTS;
        contentCreators[author].totalPoints += SHARE_POINTS;

        emit PointsEarned(author, SHARE_POINTS, "share");
    }

    function recordComment(bytes32 articleId) external {
        require(articles[articleId].author != address(0), "Article does not exist");
        articles[articleId].comments++;
        
        address author = articles[articleId].author;
        userPoints[author] += COMMENT_POINTS;
        contentCreators[author].totalPoints += COMMENT_POINTS;

        emit PointsEarned(author, COMMENT_POINTS, "comment");
    }

    // Reward Calculation and Claiming
    function calculateReward(address creator) public view returns (uint256) {
        uint256 points = contentCreators[creator].totalPoints;
        return points / POINTS_TO_TOKEN_RATE;
    }

    function claimRewards() external nonReentrant {
        uint256 reward = calculateReward(msg.sender);
        require(reward > 0, "No rewards available");

        // Update creator's reward information
        contentCreators[msg.sender].totalRewardsClaimed += reward;
        
        // Mint tokens to the creator
        _mint(msg.sender, reward * 10**decimals());

        emit RewardClaimed(msg.sender, reward);
    }

    // Admin Functions
    function setPointsToTokenRate(uint256 newRate) external onlyOwner {
        require(newRate > 0, "Invalid rate");
        POINTS_TO_TOKEN_RATE = newRate;
    }

    // Utility Functions
    function getUserPoints(address user) external view returns (uint256) {
        return userPoints[user];
    }

    function getArticleDetails(bytes32 articleId) external view returns (Article memory) {
        return articles[articleId];
    }
}