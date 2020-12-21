# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :days


## nutrition テーブル

| Column      | Type     | Options     |
| ----------- | -------- | ----------- |
| day         | datetime | null: false |
| calculation | string   | null: false |

### Association

- belongs_to :user
