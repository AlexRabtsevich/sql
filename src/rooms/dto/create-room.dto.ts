export class CreateRoomDto {
  number: number;
  levelId: string;
}

export class FindRoomsDto {
  number: number;
  level: string;
}

export class UpdateRoomDto {
  id: string;
  levelId: string;
}
