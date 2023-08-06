import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

export interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> {}

const localDate = new Intl.DateTimeFormat('en-Gb', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});

export const UserTitle = ({name, login, created }: UserTitleProps) => {

  const joinedDate = localDate.format(new Date(created));
  
  return (
  <div className={styles.userTitle} data-testid="UserTitle">
    <h2>{name}</h2>
    <h3>{login}</h3>
    <span>{joinedDate}</span>
  </div>
)};
