import { useState } from 'react';
import { Users, Wallet, PieChart, TrendingUp } from 'lucide-react';

interface TokenAllocation {
  category: string;
  percentage: number;
  description: string;
  color: string;
}

const tokenAllocations: TokenAllocation[] = [
  {
    category: "Community & LP",
    percentage: 66,
    description: "Allocated via a bonding curve launch through GFM for community rewards and liquidity.",
    color: "bg-blue-500"
  },
  {
    category: "Treasury",
    percentage: 34,
    description: "$BORK held in treasury to ensure long-term stability and growth.",
    color: "bg-indigo-500"
  }
];

export function Tokenomics() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  // Generate SVG path for pie chart segment
  const createPieSegment = (startAngle: number, endAngle: number) => {
    const radius = 1;
    const startRad = (startAngle - 90) * (Math.PI / 180); // start from top
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = radius * Math.cos(startRad);
    const y1 = radius * Math.sin(startRad);
    const x2 = radius * Math.cos(endRad);
    const y2 = radius * Math.sin(endRad);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    return `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Calculate segment angles
  const getSegmentAngles = () => {
    let currentAngle = 0;
    return tokenAllocations.map(allocation => {
      const startAngle = currentAngle;
      const endAngle = currentAngle + (allocation.percentage / 100 * 360);
      currentAngle = endAngle;
      return { startAngle, endAngle };
    });
  };

  const segmentAngles = getSegmentAngles();

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            $BORK Tokenomics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fueling community confidence through strategic treasury management and a bonding curve launch via GoFundMeme
          </p>
        </div>

        {/* Distribution View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Token Distribution Chart */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <PieChart className="text-blue-600" />
              Token Distribution
            </h3>
            <div className="relative aspect-square">
              <svg
                viewBox="-1.1 -1.1 2.2 2.2"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}
              >
                {tokenAllocations.map((allocation, index) => {
                  const { startAngle, endAngle } = segmentAngles[index];
                  const isHovered = hoveredSegment === index;
                  return (
                    <path
                      key={allocation.category}
                      d={createPieSegment(startAngle, endAngle)}
                      className={`${allocation.color.replace('bg-', 'fill-')} transition-all duration-300 cursor-pointer`}
                      style={{
                        opacity: hoveredSegment === null || isHovered ? 1 : 0.7,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transformOrigin: 'center'
                      }}
                      onMouseEnter={() => setHoveredSegment(index)}
                      onMouseLeave={() => setHoveredSegment(null)}
                    />
                  );
                })}
                <circle r="0.6" className="fill-white" />
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-gray-900 text-[0.2px] font-bold"
                >
                  100B
                </text>
                <text
                  x="0"
                  y="0.15"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-gray-600 text-[0.1px]"
                >
                  Total Supply
                </text>
              </svg>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
              {tokenAllocations.map((allocation, index) => (
                <div
                  key={allocation.category}
                  className={`flex items-start gap-2 p-2 rounded-lg transition-colors ${
                    hoveredSegment === index ? 'bg-gray-50' : ''
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div className={`w-3 h-3 mt-1 rounded-full ${allocation.color}`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {allocation.category}
                    </div>
                    <div className="text-sm text-gray-600">
                      {allocation.percentage}%
                    </div>
                    <div className={`text-xs text-gray-500 transition-all duration-300 ${
                      hoveredSegment === index ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {allocation.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Token Utility Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Community Commitment</h4>
                  <p className="text-gray-600">
                    We're all in for the success of memecoin communities. $BORK is held and staked to build confidence and drive growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Proof of Chadness</h4>
                  <p className="text-gray-600">
                    Flaunt your clout with $BORK. A true token for the non-jeet—proving you’re in it for the long haul.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Wallet className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Meme-Driven Mayhem</h4>
                  <p className="text-gray-600">
                    Not taking itself too seriously, $BORK fuels epic memes and lighthearted vibes while still delivering solid rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
