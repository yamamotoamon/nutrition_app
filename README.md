# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :days


## nutritions テーブル

| Column      | Type     | Options     |
| ----------- | -------- | ----------- |
| day         | datetime | null: false |
| calculation | string   | null: false |

### Association

- belongs_to :user



## アプリ名
NutritionCalculation

## 概要
食材の栄養価を計算することが出来るアプリ

## 詳細
材料名を選択して食べた量を入力すると摂取栄養素を計算してくれます。

・料理や野菜などの材料がプルダウンで表示され、選択する。

・実際に食べた量を入力する。

## 開発経緯
食材から詳細な栄養計算が出来るアプリが少なかったので作成しようと思いました。

## 工夫したポイント
メニューから食材をクリックすると「選択した食材」の右側に食材名が入って何の食材の栄養価を計算するのか分かりやすくしました。

## 使用技術(開発環境)
Ruby on Rails,Javascript

## 課題や今後実装したい機能
現在は1つの食材の計算しか出来ないので今後は複数の食材を同時に計算出来るようにしたいと思っています。


## Demo
https://i.gyazo.com/926220587eb2d89ece78ad727dfffe3d.mp4

## URL
https://git.heroku.com/cutritioncalculation.git

## NOTE
※テーブルは作成はしているが現時点では使用していない。
