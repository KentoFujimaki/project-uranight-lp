## LP追補セクション追加 SOW（修正案）

### 概要（目的）
- LP（Next.js）に以下4セクションを追加し、説得の流れ（問題認識 → 価値理解 → 機能理解 → 疑問解消 → 最終訴求）を強化する。
  - `LoveCodeSection`（LOVEコード診断）
  - `CalendarFeature`（恋愛運カレンダー）
  - `FAQSection`（FAQ）
  - `FinalCTASection`（最終CTA）
- 既存デザイン（星空/オーロラ/LINEグリーン）・モーションを踏襲し、CTAタップ率の向上を狙う。

### スコープ（今回実装）
- `app/page.tsx` に上記4セクションをインポート・配置（順序最適化）。
  - 推奨順序: `HeroSection` → 社会的証明（簡易）→ `LoveAiFeatures` → `LoveCodeSection` → `CalendarFeature` → `FAQSection` → `SimpleCtaSection` or `FinalCTASection` → `FloatingCTA` → `Footer`。
- 各セクションのCTA押下時のハンドラを`app/page.tsx`で一元定義し、`onCTAClick`として渡す（必要コンポーネント: `LoveCodeSection`/`CalendarFeature`/`FAQSection`/`FinalCTASection`）。
  - 現段階: スマホ（<768px）のみ `config.lineAddFriendUrl` へ遷移（既存方針を踏襲）。
  - PC挙動は将来のQRコードモーダル連携で対応（本SOWでは非スコープ）。
- 文言は既存の雰囲気に合わせた暫定コピー（確定版はLINEミニアプリ側AIからのヒアリング結果で更新）。

### 非スコープ（今回除外）
- デスクトップ時のQRコードモーダル起動/共通CTAユーティリティ化。
- SEO拡充（OG/Twitter/構造化データ）、`robots.txt`/`sitemap.xml` 追加。
- 計測導入（GA4/gtag等）とイベント送信（`cta_click` など）。
- 価格表現・法務表現の最終確定（規約・特商法・プラポリ整合）。

### 前提・依存関係
- 既存コンポーネントは実装済み。
  - `components/love-code-section.tsx`（`onCTAClick`必須）
  - `components/calendar-feature.tsx`（`onCTAClick`必須）
  - `components/faq-section.tsx`（`onCTAClick`必須）
  - `components/final-cta-section.tsx`（`onCTAClick`必須）
- LINE遷移URLは `config.lineAddFriendUrl`（`NEXT_PUBLIC_LINE_ADD_FRIEND_URL`）を参照。現状のLP既存実装方針に準拠。
- 将来、PC時は `QRCodeModal` 連携を想定（本SOW範囲外）。

### 参照（LP内コード根拠）
- `app/page.tsx` … 既存: `HeroSection`/`LoveAiFeatures`/`SimpleCtaSection`/`FloatingCTA` のみ配置。
- `components/*` … 4セクションの実装が存在し、`onCTAClick` の受け口あり。
- `lib/config.ts` … `lineAddFriendUrl` の定義（ENV優先）。

### 外部ガイドライン配慮（情報提供のみ）
- LINEミニアプリ・パフォーマンスガイドライン（Lighthouse Performance 50以上推奨）。
  - 計測はLINEログイン未実行状態で行う注記あり。
- 外部ブラウザでのミニアプリ起動時は、必要に応じて明示ログイン/誘導が必要（LPからのディープリンクは将来検討）。
- コンソール設定の反映タイミング（開発/審査/本番）差異に注意。LPからの文言確定はミニアプリの本番設定と整合させる。

### 作業手順（実装詳細）
1) `app/page.tsx` に4セクションのインポートを追加。
2) `app/page.tsx` に共通 `handleCTAClick` を定義し、スマホ時は `config.lineAddFriendUrl` を `window.open`。
3) セクションを所定の順序で挿入。`onCTAClick={handleCTAClick}` を付与（必要なセクション）。
4) 簡易ビジュアル確認（スマホ/タブレット/デスクトップ幅）。
5) ビルド確認（`npm run build`）。

### 受入基準（Acceptance Criteria）
- 4セクションがトップページに追加表示されること。
- スマホでCTAタップ時、`config.lineAddFriendUrl` に遷移すること。
- 既存セクションとの視覚的整合（フォント/色/余白/モーション）が保たれていること。
- ビルド成功、コンソールエラーなし。

### テスト観点
- 表示: 各セクションのレイアウト崩れがない（主要ブレークポイント: 375/768/1024/1280）。
- 動作: CTAタップの遷移（スマホ）/ hover・in-view アニメーションの過負荷なし。
- 回帰: 既存 `HeroSection`/`LoveAiFeatures`/`SimpleCtaSection`/`FloatingCTA` の表示・動作に影響がない。

### リスク・留意事項
- PC時のCTA無反応（現状仕様）により、CVRが頭打ちになる可能性（将来のQRモーダルで解消）。
- 文言（「初回無料」「3分」「いつでも解約」等）は最終的に法務/実装根拠と整合させる必要。
- 画像・OGなどのアセット未確定のため、SNSシェア時の訴求力は限定的（非スコープ）。

### スケジュール（目安）
- 実装/調整: 0.5日
- 動作確認/修正: 0.5日

### 将来拡張（別SOW想定）
- PC時CTAのQRコードモーダル連携＋CTAユーティリティ共通化。
- 計測（GA4）導入とイベント設計（cta_click / line_transition ほか）。
- SEOメタデータ/OG/構造化データ、`robots.txt`/`sitemap.xml` 整備。
- 文言の最終確定（LINEミニアプリ側AIヒアリング結果の反映、法務整合）。

### 変更対象ファイル（想定）
- `app/page.tsx`（インポート/JSX配置/CTAハンドラ追加）
  - 追加インポート例: `LoveCodeSection`, `CalendarFeature`, `FAQSection`, `FinalCTASection`
- （変更なし）`components/*`（4セクションは既存）
- （変更なし）`lib/config.ts`（遷移URLは既存のENV依存）

### ロールバック方針
- `app/page.tsx` の追加入力を元に戻す（該当コンポーネントのインポート・JSX削除）。

---

補足: 文言（コピー）は暫定。LINEミニアプリ側コードベースAIへのヒアリング結果（機能/制約/表現の可否/導線/課金/計測）を受けて差し替える。

### セクション別 表現内容（コピー仕様）

以下は各セクションで使用する文言仕様（推奨の骨子とバリエーション）。実装根拠が未確定の表現は【仮】とし、確定後に置換する。

#### 1) LoveCodeSection（LOVEコード診断）
- 見出し（H2）
  - スタンダード: 「あなたの恋愛タイプを、2文字の『LOVEコード』で」
  - アグレッシブ: 「2文字で恋が動く。あなたの『LOVEコード』」
- 導入（1～2文）
  - 「四柱推命の通変星をもとに、月柱×日柱から最大【100タイプ・仮】で恋愛傾向を可視化します。」
- ベネフィット（箇条書き3点／各20～40字）
  - 「自分の恋愛傾向と惹かれる相手の理由が分かる」
  - 「行動のヒントを短時間で把握できる」
  - 「相性診断・カレンダーとつながり活用が広がる」
- CTAラベル: 「無料で恋愛タイプを診断する」
- マイクロコピー: 「LINEアプリが開きます」／「初回診断無料【仮】」
- アイコン候補（参考）: heart, sparkles, users
- 禁止/注意
  - 「必ず当たる」「保証」等の断定表現は使用しない
  - 「初回無料/所要時間【3分・仮】」は確定後に反映

【強化案（刺さる表現・根拠ベース）】
- 強い一行ヘッド（価値の即時理解）
  - 「2文字で分かる、あなたの恋愛ベクトル」
- 根拠×ベネフィットの短文セット（1文）
  - 「四柱推命の通変星×内部ロジックで、月柱×日柱から最大【100タイプ・仮】に可視化。惹かれる理由やつまずきが、シンプルに分かる。」
- 体験の断片（カード内のミニ要素）
  - タイプ例カード: 「2文字コード＋12〜18字の一言タグライン＋相性よいコード1つ」
  - “次の一歩”を1行（15〜25字）で提示（例: 「3日以内に軽い誘いを」【仮】）
- CTAの目的別バリエーション
  - 「無料で私のLOVEコードを見る」／「相性と一緒に診断する」
- 禁止・注意
  - 的中/保証/運命決定の表現は不可。注意書きは「目安」「傾向」「ヒント」を軸語に。

【完成コピー案（下書き・LP差し替え用）】
- 見出し（H2）: 2文字でわかる、あなたのLOVEコード
- 導入: 四柱推命の星（通変星）にもとづいて、月柱×日柱の2文字で恋愛タイプを診断。最大【100タイプ・仮】の「今のあなた」を、短いテキストとスコアでお届けします。
- 3つのベネフィット
  - 自分の恋愛傾向が一目で分かる（2文字×最大【100タイプ・仮】）
  - 相手に惹かれる理由も一言で把握（傾向/相手コピー返却【仮】）
  - 相性％やカレンダーへ連携できる（同一ロジックで算出【仮】）
- CTA: 無料で私のLOVEコードを見る
- マイクロコピー: LINEが開きます／所要目安【3分・仮】
- 注意書き（小）
  - 診断は四柱推命APIと内部ロジックにもとづく“傾向”の提示です（結果の保証はありません）。

【UI仕様（抜粋）】
- コード表示: 2文字コードはグラデーション＋微発光、軽い上下モーションで“生きた印象”。
- タグライン: 12〜18字。改行なしでカード内1行に収める。
- 相性プレビュー: 「PR ↔︎ GS 88%【仮】」のようなミニペアを1例のみ表示（誇張を避ける）。
- レイアウト: 2列（モバイル）/4列（デスクトップ）グリッド、各カードに `hover:-translate-y-1` 程度。

【可変/要検証（ミニアプリ側と整合）】
- 最大タイプ数（【100・仮】）、所要時間（【3分・仮】）、相性％プレビュー、傾向/相手コピーの返却有無。
- 例外/補正（未定義コード時のフォールバック）をLPで表現するかは非表示が望ましい（内部仕様）。

#### 2) CalendarFeature（恋愛運カレンダー）
- 見出し（H2）
  - スタンダード: 「恋愛運カレンダー（週・月・年）」
  - アグレッシブ: 「予定が、星ときれいに重なる日」
- 導入（1～2文）
  - 「日々のスコアとハート数をもとに、【35日・仮】/月/年の流れをひと目で。」
- ベネフィット（3点）
  - 「今日から【35日・仮】先までの強弱が分かる」
  - 「月ごとのテーマと過ごし方のヒント」
  - 「年のトレンドや“凶日（空亡）”も可視化」
- CTAラベル: 「無料で恋愛運を診断する」
- マイクロコピー: 「※凶日は注意の目安です（結果の保証ではありません）」
- アイコン候補: calendar, star, alert-triangle
- 禁止/注意
  - 具体的成功の約束・保証を避ける
  - 「凶日」表現は不安喚起になりすぎない文脈で注意喚起に留める

#### 3) FAQSection（よくある質問）
- 想定Q（5～7問）と回答ガイド
  - Q: 本当に無料ですか？
    - A: 「基本診断は無料【仮】。有料機能・料金はアプリ内/規約に準拠。」
  - Q: どのように診断しますか？
    - A: 「通変星に基づき星IDを内部ロジックで2文字のLOVEコードに変換。」
  - Q: 相性はどう算出？
    - A: 「宿命星・理想像・年運の相性を重み付けし0～100%で提示。」
  - Q: 個人情報は安全？
    - A: 「LINEログインの検証とセッションで管理。詳細はプライバシーポリシーへ。」
  - Q: 解約・通知は？
    - A: 「解約はStripeのサブスク管理【導線は今後案内】。通知設定はLINE側で調整可能。」
- 文量: 回答は各80～160字目安。法務文言との整合を優先。
- 禁止/注意
  - 将来の結果を約束する表現、医学・法律助言と誤認される記述を避ける

#### 4) FinalCTASection（最終CTA）
- 見出し（H2）
  - スタンダード: 「今すぐ、運命を変える一歩を」
  - アグレッシブ: 「恋の今を、星で確かめる」
- 3ステップ表示
  - 「1) LINEで開く  2) 生年月日を入力  3) 恋愛タイプ・相性・カレンダーを見る」
- メインCTA: 「無料で恋愛タイプを診断する」
- マイクロコピー: 「LINEアプリが開きます／基本機能は無料【仮】／いつでも解約OK【仮】」
- 安心材料（小文）
  - 「個人情報は適切に管理。詳しくはプライバシーポリシーへ。」
- 禁止/注意
  - 「解約OK」は導線実装と運用確認後に確定。

#### 共通トーン & スタイル
- 優しい・神秘的・安心感。科学（四柱推命/アルゴリズム）と物語性のバランス。
- 数字・主張は根拠があるもののみ（不確定は【仮】表記）。

#### 可変値（確定後に置換）
- 【100タイプ・仮】、【35日・仮】、【3分・仮】、【初回無料・仮】、料金/解約の文言（規約/特商法との整合後確定）。

#### 推奨計測イベント（将来拡張）
- `cta_click`（params: section, device）
- `line_transition`（params: method=deep_link/qr）
- `diagnosis_start/complete`（params: feature）
- `subscribe_start/complete/cancel`（params: plan）

### 追加ヒアリングプロンプト（LoveCode差分検証用）

以下テキストをミニアプリ側AIへ送付し、LPの【仮】表現を確定させる。

```
目的: LPの「LoveCodeSection」を根拠ベースで確定させるため、実装仕様・入出力・例外・数量・UIに持ち込める短文を検証します。日本語で、事実は出典（path:line-range/関数名/ENV）を必ず付与。推測は「仮説」と明記してください。

[確認したい事項]
1) LOVEコード仕様
- 10種の通変星→2文字結合（例: 月柱×日柱）で最大何タイプか。例外/補正（未定義時フォールバック文字）は？
- 入力（必須/任意）とバリデーション（生年月日/性別/出生時刻）。内部の正規化処理。
- 出力フィールド一覧（loveCode/loveScore/tendencyCode/tendencyCopy/partnerCode/partnerCopy など）の有無。

2) コピー化できる要素
- コード別「一言タグライン」（12〜18字）と、その原文の出典。
- コード別「次の一歩」（15〜25字）の原文 or 作成可否（生成ルール/関数があれば出典）。
- コード間相性（上位候補と理由）を返却/算出できるか。可なら関数/マトリクスの出典。

3) 数量・時間・表示
- 「最大100タイプ」の正確性（算出根拠）。
- 週表示日数（ENV 既定があれば値と出典）。
- 所要時間の目安（実測または未計測）。

4) 表現の可否
- 禁止/注意ワード（的中/保証/運命決定等）の社内ガイドライン有無。
- プライバシー・セッション（LINEトークン検証/httpOnly Cookie）に関するLP記載の可否。

5) 参照（必須）
- 関連ファイル/関数/定数/ENV/ルート/PRのパスと該当行を、各要点に付けてください。

[最終アウトプット]
- 1)事実要約、2)LPにそのまま使える見出し/導入/3ベネフィット/CTA/注意書き（根拠付き）
```

### 追加ヒアリングプロンプト（CalendarFeature 検証用）

以下テキストをミニアプリ側AIへ送付し、CalendarFeature（恋愛運カレンダー）の【仮】表現を確定させる。

```
目的: LPの「CalendarFeature（恋愛運カレンダー）」を高コンバージョンかつ正確にするため、実装事実（根拠付き）を抽出します。日本語で、事実は出典（path:line-range/関数名/ENV）を必ず付与。推測は「仮説」と明記。非公開情報は開示しないでください。

[出力フォーマット]
1) サマリー（3～6行）
2) 技術仕様（箇条書き＋各要点に出典）
3) 構造化データ（JSON。後述スキーマ）
4) LP用コピー案（スタンダード/アグレッシブ各1）
5) 追補（未確定/リスク/追加質問）

[知りたいこと（必須・根拠付き）]
A. データソース/エンドポイント
- どのAPI/関数から日運・月運・年運・空亡（凶日）等を取得しますか？HTTP/内部関数/DBクエリを区別し、パス・関数名・行範囲を提示。
- リクエスト/レスポンスの主要フィールド（date, score, isKoubou, loveCode など）と例。

B. 粒度・期間・ENV
- 対応粒度: 年/月/週/日。週は【35日】のスライス表示ですか？ENV制御があればキー名と既定値（例: NEXT_PUBLIC_FORTUNE_DISPLAY_DAYS=35）。
- 週/日付の起点、タイムゾーン、うるう年の扱い、firstDayOfWeekの実装値。

C. スコア算出/ハート数/ラベル
- スコア算出の式と重み（関数例: calculateDailyScore, calculateUnifiedDailyScore）。
- スコア→ハート数の変換ロジックと閾値（SCORE_RANGES/HEARTS_THRESHOLDSなど）。
- ラベル（大吉/吉/普通/注意）や絵文字/アイコンの基準。凶日（空亡）の優先度（スコア上書きか、アイコンのみか）。

D. 空亡（凶日）
- isKoubouの判定ロジック（FortuneContextのemptyBranches or dayData.kubo等）と出典。
- 表示仕様（⚠️表記/上書きルール）。

E. 入力/前処理
- 入力（生年月日/性別/出生時刻の必須可否）とバリデーション、内部正規化。
- 暦/境界（UTC/ローカル）、採用ライブラリ（date-fns）とロケール設定。

F. UIインタラクション
- 週/月/年の切替、日セルタップ時の挙動（詳細/モーダル/制限時の誘導）有無。

G. パフォーマンス/キャッシュ
- クライアント/サーバのキャッシュ方針（SWR/TTL/メモ化）、大量期間取得時の分割/制限。

H. アクセス制限
- 無料/有料の閲覧ウィンドウ（Phase2 rolling window等）がある場合の条件（期間・延長ルール）。

I. 計測
- 実装済みイベント（名称/パラメタ/発火箇所）有無。LP側で送るべき `calendar_view`/`calendar_cta_click` 等の案との整合。

J. 法務/注意書き
- 「目安であり保証しない」等の表現可否、規約/特商法/プライバシーへのリンクENV（あれば）と出典。

[構造化データ（JSONスキーマ）]
{
  "calendar_feature": {
    "inputs": { "birthdate": "...", "gender": "...", "birthtime_optional": true, "validation": ["..."] },
    "periods_supported": ["day","week(35)","month","year"],
    "env": { "display_days_key": "NEXT_PUBLIC_FORTUNE_DISPLAY_DAYS", "default": 35, "months_key": "NEXT_PUBLIC_FORTUNE_DISPLAY_MONTHS", "years_key": "NEXT_PUBLIC_FORTUNE_DISPLAY_YEARS" },
    "timezone": { "base": "Asia/Tokyo|UTC", "boundary": "local|UTC", "library": "date-fns", "locale": "ja|未設定" },
    "score": {
      "functions": ["calculateDailyScore","calculateUnifiedDailyScore"],
      "range": [20,100],
      "thresholds": { "hearts": [20,35,50,65,80,100], "labels": { "daikichi": ">=80?", "kichi": ">=65?", "normal": ">=50?", "caution": "<35?" } }
    },
    "koubou": { "flag": "isKoubou", "algorithm": "説明", "priority": "label_override|icon_only" },
    "ui": { "first_day_of_week": "Sun|Mon|today起点", "cell_tooltip": true|false, "navigation": ["prev","next","jump"] },
    "api_endpoints": ["..."],
    "caching": { "strategy": "SWR|memo", "ttl_sec": 0 },
    "analytics": [{ "event": "calendar_view", "params": ["period","device"] }, { "event": "calendar_cta_click", "params": ["period","device"] }],
    "legal": { "disclaimer": "保証しない/目安表現", "links_env": ["NEXT_PUBLIC_PRIVACY_POLICY_URL","NEXT_PUBLIC_TERMS_OF_SERVICE_URL"] },
    "assets": { "icons": ["calendar","heart","alert-triangle"], "colors": ["..."], "screenshots": ["..."] },
    "code_refs": ["path:line-range#symbol", "..."]
  }
}

[LP用コピー案（各1）]
- スタンダード
  - 見出し: 「恋愛運カレンダー（週・月・年）」
  - 導入: 「日々のスコアとハート数から、今から【35日】/月/年の流れをひと目で。動く日・整える日を、やさしく可視化します。」
  - ベネフィット: 「今日から【35日】先までの強弱」「月ごとのテーマと過ごし方」「年のトレンドと“凶日（空亡）”も確認」
  - CTA: 「無料で恋愛運を診断する」｜マイクロコピー: 「LINEが開きます」
  - 注意書き: 「結果は目安です。行動のヒントとしてご活用ください。」
- アグレッシブ
  - 見出し: 「予定が、星ときれいに重なる日」
  - 導入: 「スコアとハート、空亡（⚠️）で、動く日と慎重な日が分かる恋愛運カレンダー。」
  - ベネフィット: 「週:【35日】の粒度」「月: テーマ×アドバイス」「年: トレンド俯瞰」
  - CTA/注意書きは上に同じ

[具体的に回答してほしい質問]
1) 期間/閾値/ENV/アルゴリズム（関数名）を、該当箇所のコード引用付きで提示してください。
2) isKoubou（凶日）の算出箇所と優先度（スコアとの関係）を明示してください。
3) スコア→ハート数の変換ルール（閾値）とラベルの対応表を提示してください。
4) 日付境界/タイムゾーン/firstDayOfWeek/ロケールの実装値を示してください。
5) UI上のインタラクション（セルタップ/ページング等）の事実を示してください。
6) 計測イベント（存在すれば）を列挙し、LP側の `calendar_view`/`calendar_cta_click`案との整合を確認してください。
7) 表現上の禁止/注意事項（保証/医療・法律助言に見える表現）を明示し、根拠を示してください。
8) 画像/色/アイコンの正規パス/指定があれば提示。なければLP側定義で問題ないか判断をください。

[出典記載の例]
- lib/fortune-evaluation/score-calculator.ts:178-204 calculateDailyScore
- lib/fortune-evaluation/weight-config.ts:11-15 SCORE_RANGES
- components/client/interactive/fortune/fortune-calendar.tsx:247-266 週スライス
- app/test-calendar-access/page.tsx:81-85 「⚠️凶日」表示
- ENV: NEXT_PUBLIC_FORTUNE_DISPLAY_DAYS（デフォルト35）
```
 
## LoveCode 事実要約（根拠付き）/コピー案（追記）

進捗メモ: LOVEコードの仕様（10種→2文字結合/最大100タイプ）、入力正規化、出力フィールド、例外フォールバック、相性マトリクス、数量（週35日ENV）、プライバシー（LINEトークン検証/httpOnly Cookie）をコードで確認。所要時間・NGワードの社内ガイドは未検出。

### 1) 事実要約（根拠付き）
- 10種の通変星を2文字で結合（例: 月柱由来＋日柱由来）→理論上最大100タイプ  
  参照: `types/love-code.ts:12-35`（10コード定義）, `lib/api/love/love-code-calculator.ts:56-61,67`
- 入力は生年月日・性別が必須、出生時刻は任意。API送信前に日時/性別を正規化  
  参照: `lib/api/core/api-client.ts:29-40`
- 出力フィールドは `loveCode/loveScore/tendencyCode/tendencyCopy/partnerCode/partnerCopy` を返却  
  参照: `lib/api/love/love-code-calculator.ts:71-81`
- 例外/補正: コード未定義や複数文字時は有効文字を抽出し、最終的に 'W' へフォールバック  
  参照: `lib/fortune-evaluation/score-calculator.ts:244-259,14-15`
- コード間相性はマトリクス＋重みで％算出（宿命星×理想像×年運）  
  参照: `lib/compatibility/engine.ts:8-26（baseMatrix/symScore）,131-200（60/40合成→％化）`
- 週表示はENVで既定35日（Calendar機能の表示数量根拠）  
  参照: `components/client/interactive/fortune/fortune-calendar.tsx:251-254`
- プライバシー: LINEトークンをサーバで検証→httpOnly Cookieでセッション管理  
  参照: `lib/auth.ts:41-71（Profile API検証）,160-179（Cookie設定）`

### 2) コピー化できる要素（原文出典と可否）
- 一言タグライン（傾向原文の要約［仮説：12–18字に編集］）
  - 原文（例）:  
    P:「対等な距離で心を響かせたい私」/ R:「刺激と競いで恋を燃やす私」/ C:「笑顔とアイデアで甘く彩る私」…  
    参照: `lib/api/love/love-code-calculator.ts:11-23`
  - LP向け短縮例［仮説・要約］:  
    P「対等に響き合う」/ R「刺激で燃やす」/ C「甘く彩る」/ M「本音で響く」/ E「自由に愛す」/ T「丁寧に積む」/ W「突き進む情熱」/ G「約束を守る」/ V「未知へ誘う」/ S「学び合う温もり」
- 「次の一歩」文（15–25字）: 生成関数未確認。LP側作成は可能［仮説］（例: 「小さな約束を今日守る」など）
- コード間相性（上位候補/理由）: 算出可能（行列×重み）。ただし「上位3コード」の静的一覧は未実装のため、表示時は動的算出を推奨  
  参照: `lib/compatibility/engine.ts:8-26,131-200`

### 3) 数量・時間・表示（根拠）
- 最大100タイプ: 10コード×2文字結合の理論上組み合わせ  
  参照: `types/love-code.ts:12-35`, `lib/api/love/love-code-calculator.ts:56-61,67`
- 週表示日数: `NEXT_PUBLIC_FORTUNE_DISPLAY_DAYS` 既定35  
  参照: `components/client/interactive/fortune/fortune-calendar.tsx:251-254`
- 所要時間: 実測・計測コードなし（未計測・仮説）

### 4) 表現の可否（根拠/方針）
- 「当たる/保証/運命決定」等の断定は社内ガイド未検出。一般法務観点から非推奨［仮説］
- プライバシー表記は可（LINEトークン検証/httpOnly Cookieの事実に基づく）  
  参照: `lib/auth.ts:41-71,160-179`
- 規約/プライバシーURLはENV経由で設定（値は要設定）  
  参照: `app/settings/settings-client.tsx:103-116`

### 5) 参照（必須）
- 10コード定義: `types/love-code.ts:12-35`  
- 生成ロジック/出力: `lib/api/love/love-code-calculator.ts:56-61,67,71-81`（＋傾向/相手コピー:11-23,28-42）  
- 入力正規化: `lib/api/core/api-client.ts:29-40`  
- 例外フォールバック: `lib/fortune-evaluation/score-calculator.ts:244-259,14-15`  
- 相性算出: `lib/compatibility/engine.ts:8-26,131-200`  
- 週表示ENV: `components/client/interactive/fortune/fortune-calendar.tsx:251-254`  
- プライバシー（検証/Cookie）: `lib/auth.ts:41-71,160-179`  

### LP用コピー（根拠付き・1案）
- 見出し（H2）: 2文字でわかる、あなたのLOVEコード  
  根拠: 2文字結合・最大100タイプ（`types/love-code.ts:12-35`, `lib/api/love/love-code-calculator.ts:56-61,67`）
- 導入: 四柱推命の星（通変星）にもとづいて、月柱×日柱の2文字で恋愛タイプを診断。最大100タイプの「今のあなた」を、短いテキストとスコアでお届けします。  
  根拠: 出力フィールド（`lib/api/love/love-code-calculator.ts:71-81`）
- 3つのベネフィット
  - 自分の恋愛傾向が一目で分かる（傾向コピー返却）  
    根拠: `lib/api/love/love-code-calculator.ts:11-23`
  - 相手に惹かれるタイプも一言で把握  
    根拠: `lib/api/love/love-code-calculator.ts:28-42`
- 相性％の算出にもつながるロジック  
  根拠: `lib/compatibility/engine.ts:8-26,131-200`
- CTA: LOVEコードを診断する（LINEが開きます）
- 注意書き
  - 診断は四柱推命APIと内部ロジックにもとづく目安です（保証しません）［仮説: 法務安全表現］
  - プライバシーはLINE認証の検証とhttpOnly Cookieで保護します（`lib/auth.ts:41-71,160-179`）

— 追加メモ
- 「次の一歩」文は生成関数なしのためLP側編集で提案可［仮説］  
- 所要時間は未計測（計測導入後に確定を推奨）

要点まとめ
- 10種×2文字＝最大100タイプ（仕様確定）／入出力・正規化・例外フォールバックあり（根拠提示済）。  
- 一言タグラインは原文あり（要約してLP化可）。  
- 相性％は行列＋重みで算出（根拠提示）。  
- 週35日ENV・プライバシー実装は事実、所要時間/NGワードガイドは未検出（仮説）。
