export interface Member {
  role: string;
  photo: string;
  name: string;
  desc: string;
}

interface MembersGroup {
  header: string;
  members: Member[];
}

export interface MembersOption {
  SLOGAN: string;
  DESCRIPTION: string;
  FOUNDER: Member;
  FUNDER_TITLE: string;
  COMMITTEE_TITLE: string;
  COMMITTER_TITLE: string;
  MEMBERS_ITEM: MembersGroup[];
}
