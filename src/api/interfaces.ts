export interface ILaunch {
  /** The number of the flight. */
  flight_number: number;
  /** The date of the flight in utc format. */
  date_utc: string;
  /** Flag indicating if the flight was successful. */
  success: boolean;
  /** The name of the flight. */
  name: string;
  /** The description of the flight. */
  details: string;
  /** Links about the flight to external media. */
  links?: { youtube_id?: string; wikipedia?: string };
}

export interface ICrew {
  /** The name of the crew member.  */
  name: string;
}

export interface IPayload {
  /** The payload weight in kg. */
  mass_kg: number;
}

export interface ICapsule {
  /** The reuse count of the capsule. */
  reuse_count: number;
}
