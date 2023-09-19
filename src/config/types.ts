export type eventType = {year: number, event: string};

export type intervalType = {
  id: number,
  type?: string,
  points:{
    from: number,
    to: number,
  },
  pointName: string,
  events: eventType[],
};