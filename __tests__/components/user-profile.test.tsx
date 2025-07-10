import { render, screen } from "@testing-library/react";
import { UserProfile } from "@/components/user-profile";
import { useDashboardStore } from "@/lib/store";
import jest from "jest"; // Declare the jest variable

// Mock the store
jest.mock("@/lib/store");
const mockUseDashboardStore = useDashboardStore as jest.MockedFunction<
  typeof useDashboardStore
>;

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe("UserProfile", () => {
  const mockUser = {
    id: "1",
    name: "John Doe",
    title: "Premium Member",
    avatar: "/test-avatar.jpg",
    level: 5,
    currentXP: 1500,
    nextLevelXP: 2000,
    totalPoints: 5000,
  };

  beforeEach(() => {
    mockUseDashboardStore.mockReturnValue({
      user: mockUser,
      benefits: [],
      rewardStats: null,
      isLoading: false,
      initializeData: jest.fn(),
      claimBenefit: jest.fn(),
    });
  });

  it("renders user information correctly", () => {
    render(<UserProfile />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Premium Member")).toBeInTheDocument();
    expect(screen.getByText("Level 5")).toBeInTheDocument();
    expect(screen.getByText("1500 / 2000 XP")).toBeInTheDocument();
  });

  it("calculates XP progress correctly", () => {
    render(<UserProfile />);

    const remainingXP = mockUser.nextLevelXP - mockUser.currentXP;
    expect(
      screen.getByText(`${remainingXP} XP to next level`)
    ).toBeInTheDocument();
  });

  it("renders nothing when user is null", () => {
    mockUseDashboardStore.mockReturnValue({
      user: null,
      benefits: [],
      rewardStats: null,
      isLoading: false,
      initializeData: jest.fn(),
      claimBenefit: jest.fn(),
    });

    const { container } = render(<UserProfile />);
    expect(container.firstChild).toBeNull();
  });
});
