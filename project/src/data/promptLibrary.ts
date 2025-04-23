export const promptLibrary: {
  [niche: string]: {
    [category: string]: string[];
  };
} = {
  retail: {
    'Listing & Positioning': [
      "Create a compelling retail space listing for a [SIZE] sq ft [TYPE] space in [LOCATION] highlighting [FEATURE 1], [FEATURE 2], and proximity to [ANCHOR TENANT/ATTRACTION].",
      "Draft a broker flyer for a new QSR space near [ANCHOR STORE] in [NEIGHBORHOOD] with [TRAFFIC COUNT] daily traffic count and [DEMOGRAPHICS] demographics.",
      "Craft a positioning statement for a second-generation restaurant space with [FEATURE] that differentiates it from competing spaces in [MARKET].",
      "Write a property description for a [SIZE] sq ft inline retail space at [LOCATION] emphasizing its visibility, access, and co-tenancy with [NEIGHBORING TENANTS]."
    ],
    'Client Communication': [
      "Write a tour recap email for [RETAILER] comparing three sites: [SITE 1], [SITE 2], and [SITE 3], highlighting key differences in visibility, access, co-tenancy, and economics.",
      "Draft a follow-up email to a [FRANCHISE TYPE] franchisee who filled out a website contact form inquiring about [LOCATION] space opportunities.",
      "Compose a market update for retail client [CLIENT NAME] detailing new developments, vacancy trends, and leasing activity in [SUBMARKET] over the past quarter.",
      "Create a tenant representation proposal for [RETAILER] seeking to expand with [NUMBER] new locations in [MARKET] over the next [TIMEFRAME]."
    ],
    'Market Research & Site Selection': [
      "Summarize demographic data, traffic count information, and co-tenancy advantages for a potential [RETAILER] site at [LOCATION] in [ZIP CODE].",
      "Compare these three sites for a pet supply tenant: [SITE 1], [SITE 2], and [SITE 3] based on rent, parking ratio, visibility, and proximity to complementary retailers.",
      "Analyze the competitive landscape for a new [RETAILER TYPE] at [LOCATION], identifying primary competitors within a [RADIUS] mile radius.",
      "Create a site selection criteria checklist for a [RETAILER] expansion in [MARKET], including minimum requirements for size, visibility, access, co-tenancy, and demographics."
    ],
    'Lease & Deal Structuring': [
      "Draft key points for a 10-year retail lease at $[RATE]/SF NNN with [TI AMOUNT] TI allowance, [MONTHS] months free rent, and [PERCENTAGE]% rent clause.",
      "Identify and summarize potential risks in the proposed lease for [TENANT] at [PROPERTY] due to co-tenancy conflicts with existing tenant [COMPETITOR].",
      "Create negotiation talking points for a retail lease renewal at [LOCATION], addressing [ISSUE 1], [ISSUE 2], and [ISSUE 3] from the original term.",
      "Outline a letter of intent for [TENANT] to lease [SIZE] sq ft at [LOCATION] with key business terms including rate, term, options, TI, and operating expenses."
    ],
    'Marketing & Brand Building': [
      "Write a LinkedIn post announcing the signing of a new [TENANT] lease at [LOCATION], highlighting the significance for the [AREA] retail corridor.",
      "Create an Instagram caption and carousel headlines for a successful retail transaction at [PROPERTY], emphasizing the property's unique attributes and the deal's impact.",
      "Draft a press release announcing the completion of a lease transaction bringing [TENANT] to [PROPERTY/DEVELOPMENT], including quotes from broker, landlord, and tenant.",
      "Design a case study highlighting how you helped [TENANT] secure an ideal location at [PROPERTY], overcoming challenges such as [CHALLENGE 1] and [CHALLENGE 2]."
    ]
  },
  office: {
    'Listing & Positioning': [
      "Create a compelling office space listing for a [SIZE] sq ft [CLASS] office space in [LOCATION] highlighting [FEATURE 1], [FEATURE 2], and [AMENITY].",
      "Draft a broker flyer for a newly renovated office suite in [BUILDING] with [FEATURE] and proximity to [TRANSPORTATION/AMENITIES].",
      "Craft a positioning statement for a creative office space with [FEATURE] that differentiates it from competing spaces in [MARKET].",
      "Write a property description for a [SIZE] sq ft office floor at [LOCATION] emphasizing its recent improvements, flexible layout, and building amenities."
    ],
    'Client Communication': [
      "Write a tour recap email for [COMPANY] comparing three office spaces: [SPACE 1], [SPACE 2], and [SPACE 3], highlighting key differences in layout, amenities, and economics.",
      "Draft a follow-up email to a technology company who inquired about [LOCATION] office space opportunities.",
      "Compose a market update for office client [CLIENT NAME] detailing new developments, vacancy trends, and leasing activity in [SUBMARKET] over the past quarter.",
      "Create a tenant representation proposal for [COMPANY] seeking to relocate their headquarters to a [SIZE] sq ft office in [MARKET]."
    ],
    'Market Research & Site Selection': [
      "Summarize the office market in [SUBMARKET], including average rental rates, vacancy rates, absorption, and development pipeline for [CLASS] buildings.",
      "Compare these three office buildings for a professional services tenant: [BUILDING 1], [BUILDING 2], and [BUILDING 3] based on class, amenities, access, and economics.",
      "Analyze the competitive landscape for a new office development at [LOCATION], identifying primary competing buildings within a [RADIUS] mile radius.",
      "Create site selection criteria for a [COMPANY TYPE] office relocation in [MARKET], including requirements for size, amenities, parking, transit access, and nearby services."
    ],
    'Lease & Deal Structuring': [
      "Draft key points for a 7-year office lease at $[RATE]/SF with [TI AMOUNT] TI allowance, [MONTHS] months free rent, and [PERCENTAGE]% escalations.",
      "Identify and summarize potential risks in the proposed office lease at [PROPERTY] related to [ISSUE 1], [ISSUE 2], and future expansion needs.",
      "Create negotiation talking points for an office lease renewal at [LOCATION], addressing rental rate increases, work letter provisions, and operating expense caps.",
      "Outline a letter of intent for [TENANT] to lease [SIZE] sq ft at [BUILDING] with key business terms including rate, term, options, TI, and parking allocation."
    ],
    'Marketing & Brand Building': [
      "Write a LinkedIn post announcing the signing of a new [TENANT] lease at [BUILDING], highlighting the significance for the [AREA] office market.",
      "Create content for an email blast featuring the successful leasing of [SIZE] sq ft at [BUILDING] to [TENANT], emphasizing the transaction highlights.",
      "Draft a press release announcing the completion of a significant office lease bringing [TENANT] to [PROPERTY/DEVELOPMENT], including quotes from key stakeholders.",
      "Design a case study highlighting how you helped [TENANT] secure an ideal office location at [PROPERTY], overcoming challenges such as [CHALLENGE 1] and [CHALLENGE 2]."
    ]
  },
  industrial: {
    'Listing & Positioning': [
      "Create a compelling industrial space listing for a [SIZE] sq ft [TYPE] facility in [LOCATION] highlighting [FEATURE 1], [FEATURE 2], and [LOGISTICS ADVANTAGE].",
      "Draft a broker flyer for a new distribution center near [TRANSPORTATION HUB] in [SUBMARKET] with [CLEAR HEIGHT] clear height and [LOADING] loading positions.",
      "Craft a positioning statement for a manufacturing facility with [FEATURE] that differentiates it from competing spaces in [MARKET].",
      "Write a property description for a [SIZE] sq ft warehouse at [LOCATION] emphasizing its ceiling height, column spacing, loading capabilities, and power capacity."
    ],
    'Client Communication': [
      "Write a tour recap email for [COMPANY] comparing three industrial properties: [PROPERTY 1], [PROPERTY 2], and [PROPERTY 3], highlighting key differences in specifications and economics.",
      "Draft a follow-up email to a logistics company who inquired about [LOCATION] warehouse space opportunities.",
      "Compose a market update for industrial client [CLIENT NAME] detailing new developments, vacancy trends, and leasing activity in [SUBMARKET] over the past quarter.",
      "Create a tenant representation proposal for [COMPANY] seeking to lease a [SIZE] sq ft distribution facility in [MARKET]."
    ],
    'Market Research & Site Selection': [
      "Summarize the industrial market in [SUBMARKET], including average rental rates, vacancy rates, absorption, and development pipeline for [TYPE] facilities.",
      "Compare these three industrial properties for a manufacturing tenant: [PROPERTY 1], [PROPERTY 2], and [PROPERTY 3] based on building specifications, access, and economics.",
      "Analyze the logistics advantages of a distribution facility at [LOCATION], including proximity to highways, rail, ports, and major population centers.",
      "Create site selection criteria for a [COMPANY TYPE] industrial requirement in [MARKET], including specifications for size, clear height, loading, power, and transportation access."
    ],
    'Lease & Deal Structuring': [
      "Draft key points for a 10-year industrial lease at $[RATE]/SF NNN with [TI AMOUNT] TI allowance, [MONTHS] months free rent, and renewal options.",
      "Identify and summarize potential risks in the proposed industrial lease at [PROPERTY] related to [ISSUE 1], [ISSUE 2], and future expansion needs.",
      "Create negotiation talking points for an industrial lease renewal at [LOCATION], addressing rental rate increases, maintenance responsibilities, and expansion rights.",
      "Outline a letter of intent for [TENANT] to lease [SIZE] sq ft at [PROPERTY] with key business terms including rate, term, options, TI, and early occupancy provisions."
    ],
    'Marketing & Brand Building': [
      "Write a LinkedIn post announcing the signing of a new [TENANT] lease at [PROPERTY], highlighting the significance for the [AREA] industrial market.",
      "Create content for an email blast featuring the successful leasing of [SIZE] sq ft at [PROPERTY] to [TENANT], emphasizing the transaction highlights.",
      "Draft a press release announcing the completion of a significant industrial lease bringing [TENANT] to [PROPERTY/DEVELOPMENT], including quotes from key stakeholders.",
      "Design a case study highlighting how you helped [TENANT] secure an ideal industrial facility at [PROPERTY], overcoming challenges such as [CHALLENGE 1] and [CHALLENGE 2]."
    ]
  },
  multifamily: {
    'Listing & Positioning': [
      "Create a compelling multifamily listing for a [UNITS]-unit apartment community in [LOCATION] highlighting [FEATURE 1], [FEATURE 2], and [AMENITY].",
      "Draft a broker flyer for a newly renovated apartment building in [NEIGHBORHOOD] with [UNIT MIX] and proximity to [TRANSPORTATION/AMENITIES].",
      "Craft a positioning statement for a value-add multifamily property with [FEATURE] that differentiates it from competing properties in [MARKET].",
      "Write a property description for a [SIZE]-unit apartment complex at [LOCATION] emphasizing its unit mix, amenities, and upside potential."
    ],
    'Client Communication': [
      "Write a tour recap email for [INVESTOR] comparing three multifamily properties: [PROPERTY 1], [PROPERTY 2], and [PROPERTY 3], highlighting key differences in condition, tenant profile, and economics.",
      "Draft a follow-up email to an investment group who inquired about [LOCATION] multifamily acquisition opportunities.",
      "Compose a market update for multifamily client [CLIENT NAME] detailing new developments, vacancy trends, and investment activity in [SUBMARKET] over the past quarter.",
      "Create an investment offering memorandum outline for a [SIZE]-unit apartment community in [MARKET] being offered at $[PRICE]."
    ],
    'Market Research & Site Selection': [
      "Summarize the multifamily market in [SUBMARKET], including average rental rates, vacancy rates, absorption, and development pipeline.",
      "Compare these three multifamily investment opportunities: [PROPERTY 1], [PROPERTY 2], and [PROPERTY 3] based on location, condition, tenant profile, and financial metrics.",
      "Analyze the demographic trends supporting multifamily demand in [SUBMARKET], including population growth, employment figures, and income statistics.",
      "Create site selection criteria for a multifamily development opportunity in [MARKET], including requirements for size, zoning, density, amenities, and proximity to employment centers."
    ],
    'Lease & Deal Structuring': [
      "Draft key points for a multifamily acquisition at $[PRICE] with [CAP RATE] cap rate, [FINANCING TERMS], and value-add strategy to achieve [TARGET RETURNS].",
      "Identify and summarize potential risks in the proposed multifamily investment at [PROPERTY] related to [ISSUE 1], [ISSUE 2], and market conditions.",
      "Create negotiation talking points for a multifamily property purchase at [LOCATION], addressing price, due diligence period, financing contingencies, and closing timeline.",
      "Outline a letter of intent for [BUYER] to purchase [PROPERTY] with key business terms including price, earnest money, due diligence period, and closing conditions."
    ],
    'Marketing & Brand Building': [
      "Write a LinkedIn post announcing the successful sale of [PROPERTY], a [UNITS]-unit multifamily community in [LOCATION] for $[PRICE].",
      "Create content for an email blast featuring the successful closing of [PROPERTY] to [BUYER], emphasizing the transaction highlights and market implications.",
      "Draft a press release announcing the completion of a significant multifamily transaction involving [PROPERTY], including quotes from key stakeholders.",
      "Design a case study highlighting how you helped [CLIENT] acquire/sell [PROPERTY], overcoming challenges such as [CHALLENGE 1] and [CHALLENGE 2]."
    ],
    'Investment Analysis': [
      "Create a summary table analyzing a [UNITS]-unit property's rent roll, including unit mix, current rents, market rents, and potential upside.",
      "Generate a detailed financial analysis comparing actual vs. market rents, operating expenses, and potential value-add opportunities for [PROPERTY].",
      "Review and summarize key metrics from the rent roll including occupancy rate, average rent per unit, lease expirations, and delinquency patterns.",
      "Analyze historical rent growth, expense trends, and NOI performance for [PROPERTY] over the past [NUMBER] years."
    ]
  }
};