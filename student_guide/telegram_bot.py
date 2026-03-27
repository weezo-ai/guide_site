import logging
import os

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import Application, CommandHandler, ContextTypes


logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)


BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "").strip()
STUDENT_GUIDE_URL = os.getenv("STUDENT_GUIDE_URL", "https://example.com").strip()


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("Open Student Guide", url=STUDENT_GUIDE_URL)],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "Welcome! Tap the button below to open Student Guide:",
        reply_markup=reply_markup,
    )


async def open_guide(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("Open Student Guide", url=STUDENT_GUIDE_URL)],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "Open Student Guide here:",
        reply_markup=reply_markup,
    )


def validate_config() -> None:
    if not BOT_TOKEN:
        raise ValueError(
            "Missing TELEGRAM_BOT_TOKEN. Set it as an environment variable."
        )
    if not STUDENT_GUIDE_URL.startswith(("http://", "https://")):
        raise ValueError(
            "STUDENT_GUIDE_URL must start with http:// or https://"
        )


def main() -> None:
    validate_config()

    application = Application.builder().token(BOT_TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("open", open_guide))

    logger.info("Bot is running...")
    application.run_polling()


if __name__ == "__main__":
    main()
